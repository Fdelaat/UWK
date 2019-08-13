<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <uwk-alert :type="alertType" timeout="3000" id="project" :message="alertMessage"></uwk-alert>
            <div class="col-md-2">
                <div class="card mb-2">
                    <div class="card-header">
                        <h5 class="font-weight-bold py-1 my-0">Sub-menu</h5>
                    </div>
                    <div class="card-body">
                        <li>Sub-menu Items</li>

                        <Strong>User online :</Strong>
                        <div v-for="user in usersInProjecten">
                            -{{user.name}}
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-10">
                <div class="card">
                    <div class="card-header">
                        <div class="row justify-content-around">
                            <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 float-left">
                                <h5 class="font-weight-bold py-1 my-0">Projecten</h5>
                            </div>
                            <div class="col-xs-8 col-xs-offset-0 col-sm-6 col-sm-offset-1 col-md-6 col-md-offset-1 col-lg-6 col-lg-offset-1">
                                <div class="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div class="input-group input-group-sm">
                                        <input type="text" class="form-control" placeholder="Filter op project...">
                                        <span class="input-group-btn">
                                            <button class="btn btn-primary btn-sm float-right" type="button" disabled="disabled">Filter!</button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <button class="btn btn-outline-primary btn-sm float-md-right float-sm-left" id="NewProject" role="button" @click="create" disabled>
                                    <i class="fas fa-tasks" aria-hidden="true" style="width: 22px"></i><span class="d-none d-md-inline-block d-lg-inline-block d-xl-inline-block">Nieuw</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="card-body" >
                        <div v-for="project in projects" :key="project.projectId">
                            <ul class="list-group">
                                <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                                    <div class="card mb-4">
                                        <div class="card-header">
                                            <Strong>{{ project.projectNaam }}</Strong>
                                        </div>
                                        <div class="card-body">
                                            <b>Adres :</b>
                                            {{ project.projectLocatie }}&nbsp;{{ project.projectPlaats }}
                                            <br />
                                            <b><span class=""></span> Werkmaatschappij :</b>
                                            {{ project.vestiging }}
                                            <br />
                                            <b> <span class=""></span> Adviseur :</b>
                                            {{ project.adviseur }}
                                            <br />
                                            <b><span class=""></span> Architect :</b>
                                            {{ project.architect }}
                                            <br />
                                            <b><span class=""></span> Beschrijving :</b>
                                            <div class="well">
                                                {{ project.omschrijving }}
                                            </div>
                                            <button class="btn btn-outline-warning btn-sm float-right" @click="edit(project)"><i class="fa fa-edit" aria-hidden="true"></i><span class="hidden-xs"> Edit</span></button>
                                        </div>
                                    </div>

                                    <div class="card mb-4">
                                        <div class="card-header" id="e-projects">
                                            <Strong>E Documenten van: {{ project.projectNaam }}</Strong>
                                        </div>
                                        <div class="card-body">
                                            <a href="#" class="btn btn-primary btn-sm mb-1 disabled" role="button" >F3 <i class="fa fa-edit" aria-hidden="true"></i></a>
                                            &nbsp;
                                            <a href="#" class="btn btn-primary btn-sm mb-1 disabled" role="button">F4 <i class="fa fa-edit" aria-hidden="true"></i></a>
                                            &nbsp;
                                            <a href="#" class="btn btn-warning btn-sm mb-1 disabled" role="button">F5 <i class="fa fa-edit" aria-hidden="true"></i></a>
                                            &nbsp;
                                            <a href="#" class="btn btn-warning btn-sm mb-1 disabled" role="button">F12 <i class="fa fa-edit" aria-hidden="true"></i></a>
                                            &nbsp;
                                            <a href="#" class="btn btn-warning btn-sm mb-1 disabled" role="button">F16 Intern <i class="fa fa-edit" aria-hidden="true"></i></a>
                                            &nbsp;
                                            <a href="#" class="btn btn-warning btn-sm mb-1 disabled" role="button">F16 Extern <i class="fa fa-edit" aria-hidden="true"></i></a>
                                            &nbsp;
                                            <a href="#" class="btn btn-warning btn-sm mb-1 disabled" role="button">F22 <i class="fa fa-edit" aria-hidden="true"></i></a>
                                            &nbsp;
                                            <a href="#" class="btn btn-warning btn-sm mb-1 disabled" role="button">F45 <i class="fa fa-edit" aria-hidden="true"></i></a>
                                            &nbsp;
                                            <a href="#" class="btn btn-warning btn-sm mb-1 disabled" role="button">Vragenlijst <i class="fa fa-edit" aria-hidden="true"></i></a>
                                            &nbsp;
                                        </div>
                                    </div>

                                    <div class="card mb-2">
                                        <div class="card-header" id="w-projects">
                                            <Strong>W Documenten van: {{ project.projectNaam }}</Strong>
                                        </div>
                                        <div class="card-body">
                                            <a href="#" class="btn btn-primary btn-sm mb-1 disabled" role="button">F3 <i class="fa fa-edit" aria-hidden="true"></i></a>
                                            &nbsp;
                                            <a href="#" class="btn btn-warning btn-sm mb-1 disabled" role="button">F4 <i class="fa fa-edit" aria-hidden="true"></i></a>
                                            &nbsp;
                                            <a href="#" class="btn btn-warning btn-sm mb-1 disabled" role="button">F5 <i class="fa fa-edit" aria-hidden="true"></i></a>
                                            &nbsp;
                                            <a href="#" class="btn btn-warning btn-sm mb-1 disabled" role="button">F12 <i class="fa fa-edit" aria-hidden="true"></i></a>
                                            &nbsp;
                                            <a href="#" class="btn btn-warning btn-sm mb-1 disabled" role="button">F16 Intern <i class="fa fa-edit" aria-hidden="true"></i></a>
                                            &nbsp;
                                            <a href="#" class="btn btn-warning btn-sm mb-1 disabled" role="button">F16 Extern <i class="fa fa-edit" aria-hidden="true"></i></a>
                                            &nbsp;
                                            <a href="#" class="btn btn-warning btn-sm mb-1 disabled" role="button">F22 <i class="fa fa-edit" aria-hidden="true"></i></a>
                                            &nbsp;
                                            <a href="#" class="btn btn-warning btn-sm mb-1 disabled" role="button">F45 <i class="fa fa-edit" aria-hidden="true"></i></a>
                                            &nbsp;
                                            <a href="#" class="btn btn-warning btn-sm mb-1 disabled" role="button">Vragenlijst <i class="fa fa-edit" aria-hidden="true"></i></a>
                                            &nbsp;
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Project Modal -->
        <div class="modal fade" id="modal-edit-projecten" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <template v-if="createForm === true">
                            <h4 class="modal-title">
                                Creeër een nieuw Project !!
                            </h4>
                        </template>

                        <template v-else="createForm">
                            <h4 class="modal-title">
                                Bewerk Project: {{ editForm.projectNaam }} !
                            </h4>
                        </template>
                        <button type="button " class="close" aria-hidden="true" @click.prevent="closeEditForm">&times;</button>
                    </div>

                    <div class="modal-body">
                        <form method="post" action="/api/v1/projecten" class="" role="form" @submit.prevent="onSubmitEdit" @keydown="editForm.errors.clear($event.target.name)" @keydown.enter.prevent="moveOnEnter">

                            <template v-if="createForm === true">
                            </template>
                            <template v-else="createForm">
                                <input type="hidden" name="_method" value="patch">
                            </template>

                            <!-- Project Naam -->
                            <div class="form-group row">
                                <label for="projectNaam"  class="col-md-4 col-form-label">Project Naam</label>
                                <div class="col-md-8">
                                    <input type="text" id="projectNaam" name="projectNaam" class="form-control" :class="{'is-invalid' : editForm.errors.has('projectNaam')}" v-model.trim="editForm.projectNaam">
                                    <div class="invalid-feedback" v-if="editForm.errors.has('projectNaam')" v-text="editForm.errors.get('projectNaam')"></div>
                                </div>
                            </div>

                            <!-- Project Nummer -->
                            <div class="form-group row">
                                <label for="projectNummer" class="col-md-4 col-form-label">Project Nummer</label>
                                <div class="col-md-8">
                                    <input type="text" id="projectNummer" name="projectNummer" class="form-control" :class="{'is-invalid' : editForm.errors.has('projectNummer')}" v-model.trim="editForm.projectNummer" disabled="disabled">
                                    <div class="invalid-feedback" v-if="editForm.errors.has('projectNummer')" v-text="editForm.errors.get('projectNummer')"></div>
                                </div>
                            </div>

                            <!-- Vestiging -->
                            <div class="form-group row">
                                <label for="vestiging" class="col-md-4 col-form-label">Vestiging</label>
                                <div class="col-md-8">
                                    <input type="text" id="vestiging" name="vestiging" class="form-control" :class="{'is-invalid' : editForm.errors.has('vestiging')}" v-model.trim="editForm.vestiging">
                                    <div class="invalid-feedback" v-if="editForm.errors.has('vestiging')" v-text="editForm.errors.get('vestiging')"></div>
                                </div>
                            </div>

                            <!-- Project Locatie -->
                            <div class="form-group row">
                                <label for="projectLocatie" class="col-md-4 col-form-label">Project Locatie</label>
                                <div class="col-md-8">
                                    <input type="text" id="projectLocatie" name="projectLocatie" class="form-control" :class="{'is-invalid' : editForm.errors.has('projectLocatie')}" v-model.trim="editForm.projectLocatie">
                                    <div class="invalid-feedback" v-if="editForm.errors.has('projectLocatie')" v-text="editForm.errors.get('projectLocatie')"></div>
                                </div>
                            </div>

                            <!-- Project Plaats -->
                            <div class="form-group row">
                                <label for="projectPlaats" class="col-md-4 col-form-label">Project Plaats</label>
                                <div class="col-md-8">
                                    <input type="text" id="projectPlaats" name="projectPlaats" class="form-control" :class="{'is-invalid' : editForm.errors.has('projectPlaats')}" v-model.trim="editForm.projectPlaats">
                                    <div class="invalid-feedback" v-if="editForm.errors.has('projectPlaats')" v-text="editForm.errors.get('projectPlaats')"></div>
                                </div>
                            </div>

                            <!-- Klant -->
                            <div class="form-group row">
                                <label for="klant" class="col-md-4 col-form-label">Klant</label>
                                <div class="col-md-8">
                                    <input type="text" id="klant" name="klant" class="form-control" :class="{'is-invalid' : editForm.errors.has('klant')}" v-model.trim="editForm.klant">
                                    <div class="invalid-feedback" v-if="editForm.errors.has('klant')" v-text="editForm.errors.get('klant')"></div>
                                </div>
                            </div>

                            <!-- Adviseur -->
                            <div class="form-group row">
                                <label for="adviseur" class="col-md-4 col-form-label">Adviseur</label>
                                <div class="col-md-8">
                                    <input type="text" id="adviseur" name="adviseur" class="form-control" :class="{'is-invalid' : editForm.errors.has('adviseur')}" v-model.trim="editForm.adviseur">
                                    <div class="invalid-feedback" v-if="editForm.errors.has('adviseur')" v-text="editForm.errors.get('adviseur')"></div>
                                </div>
                            </div>

                            <!-- Architect -->
                            <div class="form-group row">
                                <label for="architect" class="col-md-4 col-form-label">Architect</label>
                                <div class="col-md-8">
                                    <input type="text" id="architect" name="architect" class="form-control" :class="{'is-invalid' : editForm.errors.has('architect')}" v-model.trim="editForm.architect">
                                    <div class="invalid-feedback" v-if="editForm.errors.has('architect')" v-text="editForm.errors.get('architect')"></div>
                                </div>
                            </div>

                            <!-- Omschrijving -->
                            <div class="form-group row">
                                <label for="omschrijving" class="col-md-4 col-form-label">Omschrijving</label>
                                <div class="col-md-8">
                                    <input type="textfield" id="omschrijving" name="omschrijving" class="form-control" :class="{'is-invalid' : editForm.errors.has('omschrijving')}" v-model.trim="editForm.omschrijving">
                                    <div class="invalid-feedback" v-if="editForm.errors.has('omschrijving')" v-text="editForm.errors.get('omschrijving')"></div>
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
            return{
                projects: [],
                usersInProjecten: [],
                errors: [],
                alertMessage:{},
                alertType:{},
                pagination: {},
                paginationOptions: {
                    offset: 2,
                    previousText: 'Vorige',
                    nextText: 'Volgende',
                    alwaysShowPrevNext: true
                },
                createForm: {},
                editForm: new Form({
                    projectId: '',
                    projectNaam: '',
                    projectNummer: '',
                    vestiging: '',
                    projectLocatie: '',
                    projectPlaats: '',
                    klant: '',
                    adviseur: '',
                    architect: '',
                    omschrijving: ''
                }),
            };
        },
        created(){
            this.getProject();
        },

        mounted() {
            this.prepareComponent();
            Echo.join('projecten')
            .here((users) => {
                this.usersInProjecten = users;
            })
            .joining((user) => {
                this.usersInProjecten.push(user);
            })
            .leaving((user) => {
                this.usersInProjecten = this.usersInProjecten.filter(u => u !== user)
            })
            .listen('openProject', (e) => {

            });
        },

        beforeDestroy(){
            Echo.leave('projecten');
        },

        methods: {

            prepareComponent() {

                $('#modal-edit-projecten').on('shown.bs.modal', () => {
                    $('#projectNaam').focus();
                });
            },

            getProject() {
                axios.get('/api/v1/projecten',{
                    params: {
                        paginate: this.pagination.per_page,
                        page: this.pagination.current_page,
                    }
                })
                    .then(response => {
                    this.projects = response.data.data;
                    this.pagination = response.data.meta.pagination;
                })
            .catch(e => {
                    this.errors.push(e)
                });
            },

            destroy(company) {

                let url = ('/api/v1/projecten/'+ project.projectId);
                axios.delete(url)
                    .then(response => {
                    this.alertMessage = response.data.message;
                    this.alertType = response.data.type;
                    Event.$emit('alertApplied');
                    this.getProject();
                })
            .catch(e => {
                    this.errors.push(e)
                });
            },

            edit(project) {
                for (let field in project) {
                    this.editForm[field] = project[field];
                }
                $('#modal-edit-projecten').modal('show');
            },

            create() {
                this.createForm = true;
                $('#modal-edit-projecten').modal('show');
            },

            closeEditForm() {
                $('#modal-edit-projecten').modal('hide');
                this.editForm.reset();
                this.createForm = false;
            },

            onSubmitEdit() {
                if (this.createForm === true) {
                    this.editForm.post('/api/v1/projecten')
                        .then(response => {
                        this.closeEditForm();
                        this.alertMessage = response.message;
                        this.alertType = response.type;
                        Event.$emit('alertApplied');
                        this.getProject();
                    })
                .catch(e => {
                        this.errors.push(e)
                    });
                }
                else {
                    let url = ('/api/v1/projecten/' + this.editForm.projectId);
                    this.editForm.patch(url)
                        .then(response => {
                        this.closeEditForm();
                        this.alertMessage = response.message;
                        this.alertType = response.type;
                        Event.$emit('alertApplied');
                        this.getProject();
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
