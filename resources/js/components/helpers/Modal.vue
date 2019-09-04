<template>
    <transition name="modal" v-if="showModal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-content">
                    <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {

        data() {
            return {
                showModal: false
            };
        },
        created(){
            Event.$on('showModal', ()=> this.showModal = true);
        },

        updated(){
            Event.$on('closeModal', ()=> this.showModal = false);
        },
    }
</script>

<style scoped>

    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, .5);
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: flex-start;
    }

    .modal-container{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .modal-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .6s ease-out;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.0);
        transform: scale(1.0);
    }
</style>
