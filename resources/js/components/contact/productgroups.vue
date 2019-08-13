<template>
<div class="container-fluid">
    <div class="row justify-content-center">
    <uwk-alert :type="alertType" timeout="3000" id="productgroup" :message="alertMessage"></uwk-alert>
    <div class="col-md-12 col-lg-10">
        <div class="card card-default">

            <div class="card-header">
                <div class="row justify-content-around">
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-2 float-left">
                        <h5 class="font-weight-bold py-1 my-0">Productgroepen</h5>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-4 col-md-offset-1 col-lg-4 col-lg-offset-1">
                        <uwk-search :callback="search" placeholder="Zoek productgroep.." nameEvent="contactProductgroups-search"></uwk-search>
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-2">
                        <button class="btn btn-outline-primary btn-sm float-md-right float-sm-left" id="NewProductgroup" @click="create">
                            <i class="fa fa-tags" aria-hidden="true" style="width: 22px"></i><span class="d-none d-md-inline-block d-lg-inline-block d-xl-inline-block">Nieuw</span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="card-body">
                <div class="table-responsive-lg">
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">Naam</th>
                            <th scope="col">Omschrijving</th>
                            <th scope="col"></th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr v-for="productgroup in productgroups" :key="productgroup.id">
                            <!-- Name -->
                            <td scope="row" style="vertical-align: middle;">
                                {{ productgroup.name }}
                            </td>
                            <!-- Description -->
                            <td style="vertical-align: middle;">
                                {{ productgroup.description }}
                            </td>
                            <!-- Buttons -->
                            <td>
                            <span class="float-right" >
                                <button class="btn btn-outline-primary btn-sm mb-1 mr-2" role="button" @click="edit(productgroup)">
                                    <i class="fa fa-edit" aria-hidden="true" style="width: 20px"></i><span class="d-none d-lg-inline-block d-xl-inline-block">Edit</span>
                                </button>
                                <button class="btn btn-outline-danger btn-sm mb-1" role="button" @click="destroy(productgroup)">
                                    <i class="fa fa-trash" aria-hidden="true" style="width: 20px"></i><span class="d-none d-lg-inline-block d-xl-inline-block">Delete</span>
                                </button>
                            </span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <uwk-pagination :pagination="pagination" :callback="search" :options="paginationOptions" size="" ref="contact-productgroups" v-if="searchInput !== ''" />
                <uwk-pagination :pagination="pagination" :callback="getContactProductgroups" :options="paginationOptions" size="" ref="contact-productgroups" v-if="searchInput === ''" />
            </div>

        </div>
    </div>
    </div>

    <!-- Productgroup Modal -->
    <div class="modal fade" id="modal-edit-productgroup" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <template v-if="createForm === true">
                        <h4 class="modal-title">
                            Creeër een nieuwe Productgroep !!
                        </h4>
                    </template>

                    <template v-else="createForm">
                        <h4 class="modal-title">
                            Bewerk Productgroep: {{ editForm.name }} !
                        </h4>
                    </template>
                    <button type="button " class="close" aria-hidden="true" @click.prevent="closeEditForm">&times;</button>
                </div>

                <div class="modal-body">
                    <form method="post" action="/api/v1/productgroepen" class="" role="form" @submit.prevent="onSubmitEdit" @keydown="editForm.errors.clear($event.target.name)" @keydown.enter.prevent="moveOnEnter">

                        <template v-if="createForm === true">
                        </template>
                        <template v-else="createForm">
                            <input type="hidden" name="_method" value="patch">
                        </template>



                        <!-- Name -->
                        <div class="form-group row">
                            <label for="name-edit" class="col-md-4 col-form-label">Naam</label>
                            <div class="col-md-8">
                                <input type="text" id="name-edit" name="name" class="form-control" :class="{'is-invalid' : editForm.errors.has('name')}" v-model.trim="editForm.name" required>
                                <div class="invalid-feedback" v-if="editForm.errors.has('name')" v-text="editForm.errors.get('name')"></div>
                            </div>
                        </div>

                        <!-- Description -->
                        <div class="form-group row">
                            <label for="description-edit" class="col-md-4 col-form-label">Omschrijving</label>
                            <div class="col-md-8">
                                <input type="text" id="description-edit" name="description" class="form-control" :class="{'is-invalid' : editForm.errors.has('description')}" v-model.trim="editForm.description" required>
                                <div class="invalid-feedback" v-if="editForm.errors.has('description')" v-text="editForm.errors.get('description')"></div>
                            </div>
                        </div>

                        <!-- Slug -->
                        <div class="form-group row invisible">
                            <label for="slug-edit"  class="col-md-4 col-form-label">Slug</label>
                            <div class="col-md-8">
                                <input type="text" id="slug-edit" name="slug" class="form-control" :class="{'is-invalid' : editForm.errors.has('slug')}" v-model.trim="editForm.slug" disabled>
                                <div class="invalid-feedback" v-if="editForm.errors.has('slug')" v-text="editForm.errors.get('slug')"></div>
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
                    </form >
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
                productgroups: [],
                errors: [],
                alertMessage: {},
                alertType: {},
                searchInput: '',
                pagination: {
                    per_page: 10,    // required
                    current_page: 1, // required
                    last_page: 0,    // required
                },
                paginationOptions: {
                    offset: 4,
                    previousText: 'Vorige',
                    nextText: 'Volgende',
                    alwaysShowPrevNext: true
                },
                createForm: {},
                editForm: new Form({
                    id: '',
                    slug: '',
                    name: '',
                    description: ''
                }),
            };
        },

        created() {
            this.getContactProductgroups();
        },

        mounted(){
            this.prepareComponent();
            Echo.private('productgroup')
                .listen('.ProductGroupSaved', (data) => {
                    this.saveProductGroupChannelEvent(data);
                })
                .listen('.ProductGroupUpdated', (data) => {
                    this.updateProductGroupChannelEvent(data);
                })
                .listen('.ProductGroupDestroyed', (data) => {
                    this.deleteProductGroupChannelEvent(data);
                });

            Event.$on('contactProductgroups-search', data => {
                this.productgroups = data;
                });
            Event.$on('contactProductgroups-searchInput', data => {
                this.searchInput = data;
                this.pagination.current_page = "1";
                });
            Event.$on('contactProductgroups-searchReset', data => {
                this.searchInput = '';
                this.pagination.current_page = "1";
                this.getContactProductgroups();
                });
        },

        methods: {

            prepareComponent() {

                $('#modal-edit-productgroup').on('shown.bs.modal', () => {
                    $('#name-edit').focus();
                });
            },

            getContactProductgroups() {
                axios.get('/api/v1/productgroepen', {
                    params: {
                        paginate: this.pagination.per_page,
                        page: this.pagination.current_page,
                    }
                })
                    .then(response => {
                        this.productgroups = response.data.data;
                        this.pagination = response.data.meta.pagination;
                    })
                    .catch(e => {
                        this.errors.push(e)
                    });
            },

            search() {
                axios.get('/api/v1/productgroepen/search', { params: {
                        q: this.searchInput,
                        paginate: this.pagination.per_page,
                        page: this.pagination.current_page
                    }
                })
                    .then(response => {
                        this.productgroups = response.data.data;
                        this.pagination = response.data.meta.pagination;
                    })
                    .catch(e => {
                        this.errors.push(e)
                    });
            },

            destroy(productgroup) {
                let url = ('/api/v1/productgroepen/' + productgroup.id);
                axios.delete(url)
                    .then(response => {
                        Event.$emit('alertApplied');
                        this.alertMessage = response.data.message;
                        this.alertType = response.data.type;
                        this.getContactProductgroups();
                    })
                    .catch(e => {
                        this.errors.push(e)
                    });
            },

            saveProductGroupChannelEvent(productgroups){
                let searchIdx = _.findIndex(this.productgroups, {
                    id: productgroups.productGroup[0].id
                });

                if (searchIdx === -1) {
                    let searchId = _.findLastIndex(this.productgroups,) < this.pagination.per_page -1;
                    if (searchId === true){
                        this.getContactProductgroups();
                    }
                }
            },

            updateProductGroupChannelEvent(productgroups){
                let searchIdx = _.findIndex(this.productgroups, {
                    id: productgroups.productGroup[0].id
                });

                if (searchIdx === -1) {
                }
                else {
                    let searchId = _.findIndex(this.productgroups, function(o) { return o.id === productgroups.productGroup[0].id; });
                    this.productgroups.splice(searchId,1,productgroups.productGroup[0]);
                }
            },

            deleteProductGroupChannelEvent(productgroups){
                let searchIdx = _.findIndex(this.productgroups, {
                    id: productgroups.productGroup[0].id
                });

                if (searchIdx === -1) {
                }
                else {
                    this.getContactProductgroups();
                }
            },

            edit(productgroup) {
                for (let field in productgroup) {
                    this.editForm[field] = productgroup[field];
                }
                $('#modal-edit-productgroup').modal('show');
            },

            create() {
                this.createForm = true;
                $('#modal-edit-productgroup').modal('show');
            },

            closeEditForm() {
                $('#modal-edit-productgroup').modal('hide');
                this.editForm.reset();
                this.createForm = false;
            },

            onSubmitEdit() {
                if (this.createForm == true) {
                    this.editForm.post('/api/v1/productgroepen')
                        .then(response => {
                            this.closeEditForm();
                            this.alertMessage = response.message;
                            this.alertType = response.type;
                            Event.$emit('alertApplied');
                            this.getContactProductgroups();
                        })
                        .catch(e => {
                            this.errors.push(e)
                        });
                }
                else {
                    let url = ('/api/v1/productgroepen/' + this.editForm.id);
                    this.editForm.patch(url)
                        .then(response => {
                            this.closeEditForm();
                            this.alertMessage = response.message;
                            this.alertType = response.type;
                            Event.$emit('alertApplied');
                            this.getContactProductgroups();
                        })
                        .catch(e => {
                            this.errors.push(e)
                        });
                }

            },

            moveOnEnter() {
            }
        }
    }
</script>
