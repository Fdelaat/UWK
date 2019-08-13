<template>
    <div :class="alertClasses" v-show="showAlert">
        <strong v-text="body"></strong>
        <span class="alert__close float-right" v-show="important" @click="showAlert = false"><i class="fa fa-times-circle-o fa-2x" aria-hidden="true"></i></span>
    </div>
</template>

<script>
    export default {

        props: {
            message:{},
            type: {default: 'info'},
            timeout: {default: 4000},
            important: {
                type: Boolean,
                default: false
            },
            id: {default: ''},
        },

        data() {
            return{
                body:{},
                showAlert: false
            };
        },
        created(){
            Event.$on('alertApplied', ()=> this.showAlert = true);
        },

        updated() {
            this.body = this.message;
            if (! this.important) {
                setTimeout(
                    () => this.showAlert = false,
                    this.timeout
                );
            }
        },

        computed: {
            alertClasses: function() {
            let type = this.type;

            return {
                'alert': true,
                'alert-info': type == 'info',
                'alert-success': type == 'success',
                'alert-warning': type == 'warning',
                'alert-danger': type == 'danger'
                }
            }
        }
    }
</script>

<style>
    .alert {
        position: fixed;
        right: 30px;
        bottom: 30px;
        min-width: 10%;
        text-align: center;
        z-index: 99;
    }
</style>