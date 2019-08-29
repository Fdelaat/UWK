<template>
<div class="container-fluid">
    <div class="row justify-content-center">
    <div class="col-md-12 col-lg-10">
        <uwk-alert :type="alertType" timeout="3000" id="contactPerson" :message="alertMessage"></uwk-alert>
        <div class="card mb-5 ml-2 mr-2 shadow rounded">
            <div class="card-header">
                <div class="row justify-content-around align-content-center">
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-2 float-left">
                        <h5 class="font-weight-bold py-1 my-0">Contactpersonen</h5>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-4 col-md-offset-1 col-lg-4 col-lg-offset-1">
                        <uwk-search :callback=search placeholder="Zoek contactpersonen.." nameEvent="contactPerson-search"></uwk-search>
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-2">
                        <button class="btn btn-outline-primary btn-sm float-md-right float-sm-left" id="NewContactPerson" @click="create">
                            <i class="far fa-address-card" aria-hidden="true" style="width: 22px"></i><span class="d-none d-md-inline-block d-lg-inline-block d-xl-inline-block">Nieuw</span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="card-body">
                <div class="table-responsive-lg">
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">Naam &darr;</th>
                            <th scope="col">Telefoon # &darr;</th>
                            <th scope="col">Mobiel # &darr;</th>
                            <th scope="col">Email &darr;</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr v-for="contactperson in contactpersons" :key="contactperson.id">
                            <!-- FullName -->
                            <td scope="row" style="vertical-align: middle;">
                                {{ contactperson.firstName }} {{contactperson.middleName}} {{contactperson.lastName}}
                            </td>
                            <!-- PhoneNumber -->
                            <td style="vertical-align: middle;">
                                {{ contactperson.phoneNumber }}
                            </td>
                            <!-- MobilePhoneNumber -->
                            <td style="vertical-align: middle;">
                                {{ contactperson.mobilePhoneNumber }}
                            </td>
                            <!-- Email -->
                            <td style="vertical-align: middle;">
                                <a :href="emailLink(contactperson.email)">{{contactperson.email}}</a>
                            </td>
                            <td style="vertical-align: middle;">
                                <span class="text-primary" v-if="contactperson.company.id !== null ">
                                Werkt bij {{ contactperson.company.name }}
                                </span>
                                <span class="text-primary" v-if="contactperson.company.id === null ">
                                Bedrijf dient nog gekoppeld te worden!
                                </span>
                            </td>
                            <!-- Buttons -->
                            <td>
                            <span class="float-right">
                                <button class="btn btn-outline-primary btn-sm mb-1 mr-2" role="button" @click="edit(contactperson)">
                                    <i class="fa fa-edit" aria-hidden="true" style="width: 20px"></i><span class="d-none d-lg-inline-block d-xl-inline-block">Edit</span>
                                </button>
                                <button class="btn btn-outline-danger btn-sm mb-1" role="button" @click="destroy(contactperson)">
                                    <i class="fa fa-trash" aria-hidden="true" style="width: 20px"></i><span class="d-none d-lg-inline-block d-xl-inline-block">Delete</span>
                                </button>
                            </span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <uwk-pagination :pagination="pagination" :callback="search" :options="paginationOptions" size="" ref="contact-person" v-if="searchInput !== ''" />
                <uwk-pagination :pagination="pagination" :callback="getContactpersons" :options="paginationOptions" size="" ref="contact-person" v-if="searchInput === ''" />
            </div>
        </div>
    </div>
    </div>

    <!-- Edit ContactPerson Modal -->
    <div class="modal fade" id="modal-edit-person" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <template v-if="createForm === true">
                    <h4 class="modal-title">
                        Creeër een nieuw Contactpersoon !!
                    </h4>
                    </template>

                    <template v-else="createForm">
                    <h4 class="modal-title">
                        Bewerk Contactpersoon: {{ editForm.firstName }} {{editForm.middleName}} {{editForm.lastName}} !
                    </h4>
                    </template>
                    <button type="button " class="close" aria-hidden="true" @click.prevent="closeEditForm">&times;</button>
                </div>

                <div class="modal-body">
                    <form method="post" action="/api/v1/contactpersonen" class="" role="form" @submit.prevent="onSubmitEdit" @keydown="editForm.errors.clear($event.target.name)" @keydown.enter.prevent="moveOnEnter">

                        <template v-if="createForm === true">
                        </template>
                        <template v-else="createForm">
                            <input type="hidden" name="_method" value="patch">
                        </template>

                        <!-- NameSlug -->
                        <div class="form-group row">
                            <label for="nameSlug"  class="col-md-4 col-form-label">volledige_naam</label>
                            <div class="col-md-8">
                                <input type="text" id="nameSlug" name="nameSlug" class="form-control" :class="{'is-invalid' : editForm.errors.has('nameSlug')}" v-model.trim="editForm.nameSlug" disabled>
                                <div class="invalid-feedback" v-if="editForm.errors.has('nameSlug')" v-text="editForm.errors.get('nameSlug')"></div>
                            </div>
                        </div>

                        <!-- Initials -->
                        <div class="form-group row">
                            <label for="initials"  class="col-md-4 col-form-label">Initialen</label>
                            <div class="col-md-8">
                                <input type="text" id="initials" name="initials" class="form-control" :class="{'is-invalid' : editForm.errors.has('initials')}" v-model.trim="editForm.initials">
                                <div class="invalid-feedback" v-if="editForm.errors.has('initials')" v-text="editForm.errors.get('initials')"></div>
                            </div>
                        </div>

                        <!-- FirstName -->
                        <div class="form-group row">
                            <label for="firstName" class="col-md-4 col-form-label">Voornaam</label>
                            <div class="col-md-8">
                                <input type="text" id="firstName" name="firstName" class="form-control" :class="{'is-invalid' : editForm.errors.has('firstName')}" v-model.trim="editForm.firstName" required>
                                <div class="invalid-feedback" v-if="editForm.errors.has('firstName')" v-text="editForm.errors.get('firstName')"></div>
                            </div>
                        </div>

                        <!-- MiddleName -->
                        <div class="form-group row">
                            <label for="middleName" class="col-md-4 col-form-label">Tussenvoegsel</label>
                            <div class="col-md-8">
                                <input type="text" id="middleName" name="middleName" class="form-control" :class="{'is-invalid' : editForm.errors.has('middleName')}" v-model.trim="editForm.middleName">
                                <div class="invalid-feedback" v-if="editForm.errors.has('middleName')" v-text="editForm.errors.get('middleName')"></div>
                            </div>
                        </div>

                        <!-- LastName -->
                        <div class="form-group row">
                            <label for="lastName" class="col-md-4 col-form-label">Achternaam</label>
                            <div class="col-md-8">
                                <input type="text" id="lastName" name="lastName" class="form-control" :class="{'is-invalid' : editForm.errors.has('lastName')}" v-model.trim="editForm.lastName" required>
                                <div class="invalid-feedback" v-if="editForm.errors.has('lastName')" v-text="editForm.errors.get('lastName')"></div>
                            </div>
                        </div>

                        <!-- PhoneNumber -->
                        <div class="form-group row">
                            <label for="phoneNumber" class="col-md-4 col-form-label">Telefoonnummer</label>
                            <div class="col-md-8">
                                <input type="text" id="phoneNumber" name="phoneNumber" class="form-control" :class="{'is-invalid' : editForm.errors.has('phoneNumber')}" v-model.trim="editForm.phoneNumber">
                                <span class="invalid-feedback" v-if="editForm.errors.has('phoneNumber')" v-text="editForm.errors.get('phoneNumber')"></span>
                            </div>
                        </div>

                        <!-- mobilePhoneNumber -->
                        <div class="form-group row">
                            <label for="mobilePhoneNumber" class="col-md-4 col-form-label">Mobiele telefoon</label>
                            <div class="col-md-8">
                                <input type="text" id="mobilePhoneNumber" name="mobilePhoneNumber" class="form-control" :class="{'is-invalid' : editForm.errors.has('mobilePhoneNumber')}" v-model.trim="editForm.mobilePhoneNumber">
                                <div class="invalid-feedback" v-if="editForm.errors.has('mobilePhoneNumber')" v-text="editForm.errors.get('mobilePhoneNumber')"></div>
                            </div>
                        </div>

                        <!-- Email -->
                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label">Email Adres</label>
                            <div class="col-md-8">
                                <input type="text" id="email" name="email" class="form-control" :class="{'is-invalid' : editForm.errors.has('email')}" v-model.trim="editForm.email" required>
                                <div class="invalid-feedback" v-if="editForm.errors.has('email')" v-text="editForm.errors.get('email')"></div>
                            </div>

                        </div>

                        <!-- Company -->
                        <template v-if="createForm === true">
                            <div class="form-group row">
                                <label for="storeCompany" class="col-md-4 col-form-label">Bedrijf</label>
                                <div class="col-md-8">
                                    <select  id="storeCompany" class="custom-select" :class="{'is-invalid' : editForm.errors.has('company')}" v-model="editForm.company">
                                        <option value="" :value="null" selected>Selecteer bedrijf..</option>
                                        <option v-for="company in companies" :value="company.id" :key="company.id">{{ company.companies_name }}</option>
                                    </select>
                                    <div class="invalid-feedback" v-if="editForm.errors.has('company')" v-text="editForm.errors.get('company')"></div>
                                </div>
                            </div>
                        </template>
                        <template v-else="createForm">
                        <div class="form-group row">
                            <label for="Company" class="col-md-4 col-form-label">Bedrijf</label>
                            <div class="col-md-8">
                                    <select  id="Company" class="custom-select" :class="{'is-invalid' : editForm.errors.has('company')}" v-model.trim="editForm.company.id">
                                        <option value="" :value="null" v-if="editForm.company.id === null" selected>Selecteer bedrijf..</option>
                                        <option v-for="company in companies" :value="company.id" :key="company.id">{{ company.companies_name }}</option>
                                    </select>
                                <div class="invalid-feedback" v-if="editForm.errors.has('company')" v-text="editForm.errors.get('company')"></div>
                            </div>
                        </div>
                        </template>

                        <div class="modal-footer">

                            <button class="btn btn-secondary" @click.prevent="closeEditForm">Sluit</button>
                            <template v-if="createForm === true">
                                <button class="btn btn-primary" :disabled="editForm.errors.any()">Creëer</button>
                            </template>
                            <template v-else="createForm">
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
               contactpersons: [],
               companies: [],
               errors: [],
               alertMessage:{},
               alertType:{},
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
                   nameSlug: '',
                   initials: '',
                   firstName: '',
                   middleName: '',
                   lastName: '',
                   phoneNumber: '',
                   mobilePhoneNumber: '',
                   email: '',
                   company: {
                       id: '',
                       name: '',
                   }
               }),
           };
       },
       created(){
           this.getContactpersons();
           this.getCompanyNames();
       },

       mounted() {
           this.prepareComponent();
           Echo.private('contactperson')
               .listen('.PersonSaved', (data) => {
                   this.savePersonChannelEvent(data);
               })
               .listen('.PersonUpdated', (data) => {
               this.updatePersonChannelEvent(data);
               })
               .listen('.PersonDestroyed', (data) => {
                   this.deletePersonChannelEvent(data);
               });

           Event.$on('contactPerson-search', data => {
               this.contactpersons = data;
                });
           Event.$on('contactPerson-searchInput', data => {
               this.searchInput = data;
               this.pagination.current_page = "1";
                });
           Event.$on('contactPerson-searchReset', data => {
               this.searchInput = '';
               this.pagination.current_page = "1";
               this.getContactpersons();
                });
       },

        beforeDestroy(){
            Echo.leave('contactperson');
        },

       methods: {
           /**
            * Prepare the component (Vue 2.x).
            */
           prepareComponent() {

               $('#modal-edit-person').on('shown.bs.modal', () => {
                   $('#firstName').focus();
               });
           },

           /**
            * Get all of the data for contactperons.
            */
           getContactpersons() {
               axios.get('/api/v1/contactpersonen', {
                   params: {
                       paginate: this.pagination.per_page,
                       page: this.pagination.current_page,
                   }
               })
                   .then(response => {
                       this.contactpersons = response.data.data;
                       this.pagination = response.data.meta.pagination;
                   })
                   .catch( e => {
                       this.errors.push(e)
                   });
           },

           getCompanyNames() {
               axios.get('/api/v1/bedrijven/namen', {
               })
                   .then(response => {
                       this.companies = response.data;
                   })
                   .catch( e => {
                       this.errors.push(e)
                   });
           },

           search() {
               let url = ('/api/v1/contactpersonen/search');
               axios.get(url, { params: {
                       q: this.searchInput,
                       paginate: this.pagination.per_page,
                       page: this.pagination.current_page
                   }
               })
                   .then(response => {
                       this.contactpersons = response.data.data;
                       this.pagination = response.data.meta.pagination;
                   })
                   .catch(e => {
                       this.errors.push(e)
                   });
           },

           destroy(contactperson) {
               let url = ('/api/v1/contactpersonen/'+ contactperson.id);
               axios.delete(url)
                   .then(response => {
                       Event.$emit('alertApplied');
                       this.alertMessage = response.data.message;
                       this.alertType = response.data.type;
                       this.getContactpersons();
                   })
                   .catch(e => {
                       this.errors.push(e)
                   });
           },

           savePersonChannelEvent(contactperson){
               let searchIdx = _.findIndex(this.contactpersons, {
                   id: contactperson.contactPerson[0].id
               });

               if (searchIdx === -1) {
                   let searchId = _.findLastIndex(this.contactpersons,) < this.pagination.per_page -1;
                   if (searchId == true){
                       this.getContactpersons();
                   }
               }

           },

           updatePersonChannelEvent(contactperson){
               let searchIdx = _.findIndex(this.contactpersons, {
                   id: contactperson.contactPerson[0].id
               });

               if (searchIdx === -1) {
               }
               else {
                   let searchId = _.findIndex(this.contactpersons, function(o) { return o.id === contactperson.contactPerson[0].id; });
                   this.contactpersons.splice(searchId,1,contactperson.contactPerson[0]);
               }
           },

           deletePersonChannelEvent(contactperson){
               let searchIdx = _.findIndex(this.contactpersons, {
                   id: contactperson.contactPerson[0].id
               });
               if (searchIdx === -1) {
               }
               else {
                   this.getContactpersons();
               }
           },

           edit(contactperson) {
               for (let field in contactperson) {
                   this.editForm[field] = contactperson[field];
               }
               $('#modal-edit-person').modal('show');
           },

           create() {
               this.createForm = true;
               $('#modal-edit-person').modal('show');
           },

           closeEditForm() {
               $('#modal-edit-person').modal('hide');
               this.editForm.reset();
               this.createForm = false;
           },

           onSubmitEdit() {
               if (this.createForm === true) {
                   this.editForm.post('/api/v1/contactpersonen')
                       .then(response => {
                           this.closeEditForm();
                           this.alertMessage = response.message;
                           this.alertType = response.type;
                           Event.$emit('alertApplied');
                           this.getContactpersons();
                       })
                       .catch(e => {
                           this.errors.push(e)
                       });
               }
               else {
                    let url = ('/api/v1/contactpersonen/' + this.editForm.id);
                    this.editForm.patch(url)
                        .then(response => {
                            this.closeEditForm();
                            this.alertMessage = response.message;
                            this.alertType = response.type;
                            Event.$emit('alertApplied');
                            this.getContactpersons();
                        })
                       .catch(e => {
                           this.errors.push(e)
                       });
               }
           },

           emailLink(emailAdress){
               return ('mailto:' + emailAdress)
           },

           moveOnEnter() {

           }
       },

    }
</script>
