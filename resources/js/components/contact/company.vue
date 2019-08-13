<template>
<div class="container-fluid">
    <div class="row justify-content-center">
    <div class="col-md-12 col-lg-10">
        <uwk-alert :type="alertType" timeout="3000" id="company" :message="alertMessage"></uwk-alert>
        <div class="card">
            <div class="card-header mb-1">
                <div class="row justify-content-around">
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-2 float-left">
                        <h5 class="font-weight-bold py-1 my-0">Bedrijven</h5>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-4 col-md-offset-1 col-lg-4 col-lg-offset-1">
                        <uwk-search :callback=search placeholder="Zoek bedrijf.." nameEvent="contactCompany-search"></uwk-search>
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-2">
                        <button class="btn btn-outline-primary btn-sm float-md-right float-sm-left" role="button" @click="create">
                            <i class="fa fa-university" aria-hidden="true" style="width: 22px"></i><span class="hidden"><span class="d-none d-sm-inline-block d-md-inline-block d-lg-inline-block d-xl-inline-block">Nieuw</span></span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="card-body" id="company-card">
                <div class="card-group d-flex flex-sm-row flex-column justify-content-center">
                    <div v-for="company in companies" :key="company.id">
                        <div class="card mb-3 ml-2 mr-2 flex-fill">
                            <div class="card-header mb-1">
                                <h6>{{ company.name }}</h6>
                            </div>
                            <div class="card-body mt-0">
                                <div class="row mb-1">
                                    <i class="fa fa-home fa-fw"></i>&nbsp;<span class="ml-4">{{ company.streetName }}&nbsp;{{ company.streetNumber }}</span>
                                </div>
                                <div class="row mb-1">
                                    <span class="ml-5">{{ company.streetPostalCode }}&nbsp;&nbsp;{{ company.city }}</span>
                                </div>
                                <div class="row mb-1">
                                    <span class="mr-4"><i class="fa fa-globe fa-fw"></i></span>
                                    {{ company.country }}
                                </div>
                                <div class="row mb-1">
                                    <span class="mr-2"><i class="fa fa-envelope fa-fw"></i>&nbsp;A&nbsp;</span>
                                    <a :href="emailLink(company.defaultEmail)">{{ company.defaultEmail }}</a>
                                </div>
                                <div class="row mb-1">
                                    <span class="mr-2"><i class="fa fa-envelope fa-fw"></i>&nbsp;P&nbsp;</span>
                                    <a :href="emailLink(company.projectEmail)">{{ company.projectEmail }}</a>
                                </div>
                            </div>
                            <div class="card-footer">
                                <button class="btn btn-outline-primary btn-sm mr-1" role="button" @click="persons(company)">
                                    <i class="fa fa-user" aria-hidden="true" style="width: 20px"></i><span class="d-none d-sm-inline-block d-md-inline-block d-lg-inline-block d-xl-inline-block">Contact-personen</span>
                                </button>
                                <span class="float-right">
                                    <button class="btn btn-outline-warning btn-sm ml-2 mr-1" @click="edit(company)">
                                        <i class="fa fa-edit" aria-hidden="true" style="width: 22px"></i><span class="d-none d-sm-inline-block d-md-inline-block d-lg-inline-block d-xl-inline-block">Edit</span>
                                    </button>
                                    <button class="btn btn-outline-danger btn-sm ml-1" role="button" @click="destroy(company)">
                                        <i class="fa fa-trash" aria-hidden="true" style="width: 22px"></i><span class="d-none d-sm-inline-block d-md-inline-block d-lg-inline-block d-xl-inline-block">Delete</span>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <uwk-pagination :pagination="pagination" :callback="search" :options="paginationOptions" size="" ref="contact-company" v-if="searchInput !== ''" />
            <uwk-pagination :pagination="pagination" :callback="getCompanies" :options="paginationOptions" size="" ref="contact-company" v-else="searchInput === ''" />
        </div>
    </div>
    </div>

    <!-- Company Modal -->
    <div class="modal fade" id="modal-edit-company" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">

                    <template v-if="createForm == true">
                        <h4 class="modal-title">
                            Creeër een nieuw bedrijf !!
                        </h4>
                    </template>

                    <template v-else="createForm">
                        <h4 class="modal-title">
                            Bewerk Bedrijf: {{ editForm.name }} !
                        </h4>
                    </template>
                    <button type="button " class="close" aria-hidden="true" @click.prevent="closeEditForm">&times;</button>
                </div>

                <div class="modal-body">
                    <form method="post" action="/api/v1/bedrijven" class="" role="form" @submit.prevent="onSubmitEdit" @keydown="editForm.errors.clear($event.target.name)" @keydown.enter.prevent="moveOnEnter">

                        <template v-if="createForm == true">
                        </template>
                        <template v-else="createForm">
                            <input type="hidden" name="_method" value="patch">
                        </template>

                        <!-- Name -->
                        <div class="form-group row">
                            <label for="name"  class="col-md-4 col-form-label">Naam</label>
                            <div class="col-md-8">
                                <input type="text" id="name" name="name" class="form-control" :class="{'is-invalid' : editForm.errors.has('name')}" v-model.trim="editForm.name">
                                <div class="invalid-feedback" v-if="editForm.errors.has('name')" v-text="editForm.errors.get('name')"></div>
                            </div>
                        </div>

                        <!-- streetName -->
                        <div class="form-group row">
                            <label for="streetName" class="col-md-4 col-form-label">Straatnaam</label>

                            <div class="col-md-8">
                                <input type="text" id="streetName" name="streetName" class="form-control" :class="{'is-invalid' : editForm.errors.has('streetName')}" v-model.trim="editForm.streetName">
                                <div class="invalid-feedback" v-if="editForm.errors.has('streetName')" v-text="editForm.errors.get('streetName')"></div>
                            </div>
                        </div>

                        <!-- streetNumber -->
                        <div class="form-group row">
                            <label for="streetNumber" class="col-md-4 col-form-label">Huisnummer</label>

                            <div class="col-md-8">
                                <input type="text" id="streetNumber" name="streetNumber" class="form-control" :class="{'is-invalid' : editForm.errors.has('streetNumber')}" v-model.trim="editForm.streetNumber">
                                <div class="invalid-feedback" v-if="editForm.errors.has('streetNumber')" v-text="editForm.errors.get('streetNumber')"></div>
                            </div>
                        </div>

                        <!-- streetPostalCode -->
                        <div class="form-group row">
                            <label for="streetPostalCode" class="col-md-4 col-form-label">Postcode</label>

                            <div class="col-md-8">
                                <input type="text" id="streetPostalCode" name="streetPostalCode" class="form-control" :class="{'is-invalid' : editForm.errors.has('streetPostalCode')}" v-model.trim="editForm.streetPostalCode">
                                <div class="invalid-feedback" v-if="editForm.errors.has('streetPostalCode')" v-text="editForm.errors.get('streetPostalCode')"></div>
                            </div>
                        </div>

                        <!-- City -->
                        <div class="form-group row">
                            <label for="city" class="col-md-4 col-form-label">Plaats</label>

                            <div class="col-md-8">
                                <input type="text" id="city" name="city" class="form-control" :class="{'is-invalid' : editForm.errors.has('city')}" v-model.trim="editForm.city">
                                <div class="invalid-feedback" v-if="editForm.errors.has('city')" v-text="editForm.errors.get('city')"></div>
                            </div>
                        </div>

                        <!-- postalBox -->
                        <div class="form-group row">
                            <label for="postalBox" class="col-md-4 col-form-label">Postbus</label>

                            <div class="col-md-8">
                                <input type="text" id="postalBox" name="postalBox" class="form-control" :class="{'is-invalid' : editForm.errors.has('postalBox')}" v-model.trim="editForm.postalBox">
                                <div class="invalid-feedback" v-if="editForm.errors.has('postalBox')" v-text="editForm.errors.get('postalBox')"></div>
                            </div>
                        </div>

                        <!-- PostalBoxCode -->
                        <div class="form-group row">
                            <label for="postalBoxCode" class="col-md-4 col-form-label">Postcode(postbus)</label>

                            <div class="col-md-8">
                                <input type="text" id="postalBoxCode" name="postalBoxCode" class="form-control" :class="{'is-invalid' : editForm.errors.has('postalBoxCode')}" v-model.trim="editForm.postalBoxCode">
                                <div class="invalid-feedback" v-if="editForm.errors.has('postalBoxCode')" v-text="editForm.errors.get('postalBoxCode')"></div>
                            </div>

                        </div>

                        <!-- postalBoxCity -->
                        <div class="form-group row">
                            <label for="PostalBoxCity" class="col-md-4 col-form-label">Plaats(postbus)</label>

                            <div class="col-md-8">
                                <input type="text" id="PostalBoxCity" name="postalBoxCity" class="form-control" :class="{'is-invalid' : editForm.errors.has('PostalBoxCity')}" v-model.trim="editForm.PostalBoxCity">
                                <div class="invalid-feedback" v-if="editForm.errors.has('PostalBoxCity')" v-text="editForm.errors.get('PostalBoxCity')"></div>
                            </div>

                        </div>

                        <!-- country -->
                        <div class="form-group row">
                            <label for="country" class="col-md-4 col-form-label">Land</label>

                            <div class="col-md-8">
                                <select  v-model.trim="editForm.country" id="country" class="custom-select" :class="{'is-invalid' : editForm.errors.has('country')}">
                                    <option :value="null" value="">Selecteer een land</option>
                                    <option v-for="country in countries" value="" :value="country" :key="country.id">{{ country }}</option>
                                </select>
                                <div class="invalid-feedback" v-if="editForm.errors.has('country')" v-text="editForm.errors.get('country')"></div>
                            </div>

                        </div>

                        <!-- defaultEmail -->
                        <div class="form-group row">
                            <label for="defaultEmail" class="col-md-4 col-form-label">Algemene Email</label>

                            <div class="col-md-8">
                                <input type="text" id="defaultEmail" name="defaultEmail" class="form-control" :class="{'is-invalid' : editForm.errors.has('defaultEmail')}" v-model.trim="editForm.defaultEmail">
                                <div class="invalid-feedback" v-if="editForm.errors.has('defaultEmail')" v-text="editForm.errors.get('defaultEmail')"></div>
                            </div>

                        </div>

                        <!-- projectEmail -->
                        <div class="form-group row">
                            <label for="projectEmail" class="col-md-4 col-form-label">Project Email</label>

                            <div class="col-md-8">
                                <input type="text" id="projectEmail" name="projectEmail" class="form-control" :class="{'is-invalid' : editForm.errors.has('projectEmail')}" v-model.trim="editForm.projectEmail">
                                <div class="invalid-feedback" v-if="editForm.errors.has('projectEmail')" v-text="editForm.errors.get('projectEmail')"></div>
                            </div>

                        </div>

                        <div class="modal-footer">

                            <template v-if="createForm === true">
                                <button class="btn btn-secondary" @click.prevent="closeEditForm">Sluit</button>
                                <button class="btn btn-primary" :disabled="editForm.errors.any()">Creëer</button>
                            </template>
                            <template v-else="createForm">
                                <button class="btn btn-secondary" @click.prevent="closeEditForm">Sluit</button>
                                <button class="btn btn-warning" :disabled="editForm.errors.any()">Wijzig</button>
                            </template>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>


</div>
</template>

<script>
    export default {
        data() {
            return {
                companies: [],
                errors: [],
                alertMessage:{},
                alertType:{},
                countries: ['Nederland','Belgie','Duitsland',],
                searchInput: '',
                pagination: {
                    per_page: 8,    // required
                    current_page: 1, // required
                    last_page: 0,    // required
                },
                paginationOptions: {
                    offset: 2,
                    previousText: 'Vorige',
                    nextText: 'Volgende',
                    alwaysShowPrevNext: true
                },
                createForm: {},
                editForm: new Form({
                    id: '',
                    name: '',
                    streetName: '',
                    streetNumber: '',
                    streetPostalCode: '',
                    city: '',
                    postalBox: '',
                    postalBoxCode: '',
                    PostalBoxCity: '',
                    country: '',
                    defaultEmail: '',
                    projectEmail: ''
                }),
            };
        },

        created(){
            this.getCompanies();
        },

        mounted() {
            this.prepareComponent();
            Echo.private('contactcompany')
                .listen('.CompanySaved', (data) => {
                    this.saveCompanyChannelEvent(data);
                })
                .listen('.CompanyUpdated', (data) => {
                    this.updateCompanyChannelEvent(data);
                })
                .listen('.CompanyDestroyed', (data) => {
                    this.deleteCompanyChannelEvent(data);
                });

            Event.$on('contactCompany-search', data => {
                this.companies = data;
                });
            Event.$on('contactCompany-searchInput', data => {
                this.searchInput = data;
                this.pagination.current_page = "1";
                });
            Event.$on('contactCompany-searchReset', data => {
                this.searchInput = '';
                this.pagination.current_page = "1";
                this.getCompanies();
                });
        },

        beforeDestroy(){
            Echo.leave('contactcompany');
        },

        methods: {

            prepareComponent() {

                $('#modal-edit-company').on('shown.bs.modal', () => {
                    $('#name').focus();
                });
            },

            getCompanies() {
                axios.get('/api/v1/bedrijven', {
                    params: {
                        paginate: this.pagination.per_page,
                        page: this.pagination.current_page,
                    }
                })
                    .then(response => {
                        this.companies = response.data.data;
                        this.pagination = response.data.meta.pagination;
                    })
                    .catch(e => {
                        this.errors.push(e)
                    });
            },

            search() {
                axios.get('/api/v1/bedrijven/search', { params: {
                        q: this.searchInput,
                        paginate: this.pagination.per_page,
                        page: this.pagination.current_page
                    }
                })
                    .then(response => {
                        this.companies = response.data.data;
                        this.pagination = response.data.meta.pagination;
                    })
                    .catch(e => {
                        this.errors.push(e)
                    });
            },

            destroy(company) {

                let url = ('/api/v1/bedrijven/' + company.id);
                axios.delete(url)
                    .then(response => {
                        this.alertMessage = response.data.message;
                        this.alertType = response.data.type;
                        Event.$emit('alertApplied');
                        this.getCompanies();
                    })
                    .catch(e => {
                        this.errors.push(e)
                    });
            },

            saveCompanyChannelEvent(company) {
                let searchIdx = _.findIndex(this.companies, {
                    id: company.contactCompany[0].id
                });

                if (searchIdx === -1) {
                    let searchId = _.findIndex(this.companies,) < this.pagination.per_page -1;
                    if(searchId === true){
                        this.getCompanies();
                    }
                }
            },

            updateCompanyChannelEvent(company) {
                let searchIdx = _.findIndex(this.companies, {
                    id: company.contactCompany[0].id
                });

                if (searchIdx === -1) {
                }
                else {
                    let searchId = _.findIndex(this.companies, function (o) {
                        return o.id === company.contactCompany[0].id;
                    });
                    this.companies.splice(searchId, 1, company.contactCompany[0]);
                }
            },

            deleteCompanyChannelEvent(company) {
                let searchIdx = _.findIndex(this.companies, {
                    id: company.contactCompany[0].id
                });

                if (searchIdx === -1) {
                }
                else {
                    this.getCompanies();
                }
            },

            edit(company) {
                for (let field in company) {
                    this.editForm[field] = company[field];
                }
                $('#modal-edit-company').modal('show');
            },

            persons(company) {

            },

            create() {
                this.createForm = true;
                $('#modal-edit-company').modal('show');
            },

            closeEditForm() {
                $('#modal-edit-company').modal('hide');
                this.editForm.reset();
                this.createForm = false;
            },

            onSubmitEdit() {
                if (this.createForm == true) {
                    this.editForm.post('/api/v1/bedrijven')
                        .then(response => {
                            this.closeEditForm();
                            this.alertMessage = response.message;
                            this.alertType = response.type;
                            Event.$emit('alertApplied');
                            this.getCompanies();
                        })
                        .catch(e => {
                            this.errors.push(e)
                        });
                }
                else {
                    let url = ('/api/v1/bedrijven/' + this.editForm.id);
                    this.editForm.patch(url)
                        .then(response => {
                            this.closeEditForm();
                            this.alertMessage = response.message;
                            this.alertType = response.type;
                            Event.$emit('alertApplied');
                            this.getCompanies();
                        })
                }
            },

            emailLink(emailAdress) {
                return ('mailto:' + emailAdress)
            },

            moveOnEnter() {
            },
        }
    }
</script>