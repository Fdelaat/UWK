<template>
    <div class="form-group row col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="input-group input-group-sm">
            <input type="text" class="form-control" id="searchInput" aria-label="title" aria-describedby="button-search" :placeholder="title" v-model="searchData" @keydown.escape.prevent="escape">
            <div class="input-group-append">
                <button class="btn btn-primary btn-sm float-right" id="button-search" type="button" disabled><i class="fas fa-search" aria-hidden="true" style="width: 20px"></i></button>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props: {
            callback: {
                type: Function,
                required: true
            },
            placeholder:{
                type: String,
                default: ""
            },
            nameEvent:{
                type: String,
                default: ""
            },
        },

        data() {
            return {
                searchData: null,
                title:{},
                eventName:{},
                results: [],
                errors: [],
            };
        },

        created(){
            this.title = this.placeholder;
            this.eventName = this.nameEvent;
        },

        mounted(){
            Event.$on(this.eventName +'ClearInput', data => {
                this.searchData = "";
            });
        },

        watch: {
            searchData(after) {
                if (this.searchData !== "") {
                    Event.$emit(this.eventName +'Input',
                        this.searchData,
                    );
                    this.callback();
                    Event.$emit(this.eventName,
                        this.results
                    );
                }
                else{
                    Event.$emit(this.eventName +'Reset',
                        this.searchData,
                    );
                }
            },
        },

        methods: {
            escape() {
                this.searchData="";
                $('#searchInput').blur();
            },
        }
    };
</script>
