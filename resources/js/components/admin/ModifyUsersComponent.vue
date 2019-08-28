<template>
    <div>
        <uwk-alert type="success" timeout="3000" id="productgroup" message="De gebruikers rol is aangepast!"></uwk-alert>
        <div class="row" v-if="users.length">
            <div class="col-md-8">
                <div class="card mb-5 shadow rounded">
                    <div class="card-header">
                        <h5 class="font-weight-bold py-1 my-0">Verwijder gebruikers</h5>
                    </div>
                    <div class="card-body">
                        <div class="align-content-center mb-3">
                            <button @click="order" class="btn btn-outline-info"><span :class="'fa fa-sort-amount-asc' + (orderBy === 'desc' ? '' : 'fa fa-sort-amount-desc')"></span> {{ (orderBy === 'asc' ? 'Nieuwste' : 'Oudste') }}</button>
                            <a href="/admin/users/export" class="btn btn-outline-success float-right mr-2"><i class="far fa-file-excel"></i>&nbsp;Excel</a>
                        </div>
                        <div class="table-responsive mt-2">
                            <table class="table">
                                <thead>
                                <tr>
                                    <th>ID</th> <th>User</th> <th>Email</th> <th>Role</th> <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(user, index) in users" :key="index">
                                    <td>{{ user.id }}</td><td>{{ user.name }}</td> <td>{{ user.email }}</td> <td>{{ user.role }}</td> <td><a href="#" class="btn btn-outline-danger btn-xs" @click.prevent="destroy(index, user.name)"><span class="fa fa-trash" aria-hidden="true"></span> Delete</a></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card mb-5 shadow rounded">
                    <div class="card-header">
                        <h5 class="font-weight-bold py-1 my-0">Wijzig rol gebruiker</h5>
                    </div>
                    <div class="card-body">
                        <div class="form-group row col-md-12">
                            <label for="user" class="control-label">Selecteer de gebruiker om te wijzigen</label>
                            <select v-model="modifyUser.id" id="user" class="custom-select" :class="{'is-invalid' : modifyError.user}" required>
                                <option :value="null" value="">Selecteer een Gebruiker</option>
                                <option v-for="user in users" :value="user.id" value="" :key="user.id">{{ user.id  }} - {{ user.name }} - {{ user.role }}</option>
                            </select>
                            <div class="invalid-feedback" v-if="modifyError.user">Ongeldige Gebruiker</div>
                        </div>
                        <div class="form-group row col-md-12">
                            <label for="role" class="col-form-label">Selecteer Nieuwe Rol</label>
                            <select v-model="modifyUser.role" name="role" id="role" class="custom-select" :class="{'is-invalid' : modifyError.role}">
                                <option :value="null" value="">Selecteer een Rol</option>
                                <option v-for="role in roles" value="" :value="role" :key="role.id">{{ role }}</option>
                            </select>
                            <div class="invalid-feedback" v-if="modifyError.role" >Ongeldige Rol</div>
                        </div>
                        <div class="col-md-12">
                            <button @click.prevent="ModifyUser" :disabled="requestSent && !retrieved" class="btn btn-outline-primary btn-top-mar pull-right">Wijzig Rol</button>
                        </div>
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
                users: [],
                orderBy: 'asc',

                // used in v-model with select element
                modifyUser: {
                    id: null,
                    role: null
                },

                // used to track errors in submission
                modifyError: {
                    user: false,
                    role: false
                },

                // used to display success message
                modifySuccess: false,

                // available roles
                roles: ['admin','user'],

                // used to track status of requests for modification of User
                requestSent: false,
                retrieved: false
            }
        },
        props: {
            usersProp: null
        },
        methods: {
            ModifyUser() {
                this.modifyError.user = false;
                this.modifyError.role = false;
                this.requestSent = true;

                axios.post('/admin/update', {
                        user: this.modifyUser.id,
                        role: this.modifyUser.role
                    })
                    .then(response => {
                        for (var i = 0; i < this.users.length; i++) {
                    // updating user's role in the users array
                    (this.users[i].id === this.modifyUser.id) ? this.users[i].role = this.modifyUser.role : '' ;
                    }

                    this.modifySuccess = true;
                    Event.$emit('alertApplied');
                    this.retrieved = true;
                    this.modifyUser.id = 'null'
                    this.modifyUser.role = 'null'
                })
                .catch(error => {
                    // FormRequest returns appropriate validation response
                    if (error.response.data.errors.user) {
                        this.modifyError.user = true;
                    }
                    if (error.response.data.errors.role) {
                        this.modifyError.role = true;
                    }
                    this.retrieved = true;
                });

                this.requestSent = false;
                this.retrieved = false;
            },
            destroy (index, name) {
                this.users.splice(index, 1);
                let url = ('/admin/users/'+ name);
                axios.delete(url)
                    .then(response => {
                })
                .catch(e => {
                    this.errors.push(e)
                });
            },
            order() {
                this.users.reverse();
                this.orderBy = (this.orderBy === 'asc' ? 'desc' : 'asc');
            }
        },
        mounted() {
            this.users = JSON.parse(this.usersProp);
        }
    }
</script>