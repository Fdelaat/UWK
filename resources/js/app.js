/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

window.Event = new Vue();

//import InstantSearch from 'vue-instantsearch';
//Vue.use(InstantSearch);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('uwk-alert', require('./components/helpers/Alert.vue').default);
Vue.component('uwk-search', require('./components/helpers/Search.vue').default);
Vue.component('uwk-pagination', require('./components/helpers/vue-bootstrap-pagination.vue').default);

Vue.component('uwk-work-projects', require('./components/project.vue').default);
Vue.component('uwk-main-page', require('./components/main.vue').default);

Vue.component('uwk-contact-company', require('./components/contact/company.vue').default);
Vue.component('uwk-contact-person', require('./components/contact/contactperson.vue').default);
Vue.component('uwk-product-group', require('./components/contact/productgroups.vue').default);

Vue.component('uwk-users', require('./components/admin/ModifyUsersComponent.vue').default);

Vue.component('passport-clients', require('./components/passport/Clients.vue').default);
Vue.component('passport-authorized-clients', require('./components/passport/AuthorizedClients.vue').default);
Vue.component('passport-personal-access-tokens', require('./components/passport/PersonalAccessTokens.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
