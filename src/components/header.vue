<template>
    <b-navbar>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="../assets/logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                    class="ml-3"
                >
            </b-navbar-item>
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-success" v-on:click="logoutUser()" v-if="isLoggin">
                        <strong>Log out</strong>
                    </a>
                    <b-navbar-item tag="router-link" :to="{ path: '/login' }">
                        <a class="button is-light" v-if="!isLoggin">
                            Log in
                        </a>
                    </b-navbar-item>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>
<script>
import {mapActions, mapGetters} from 'vuex';
export default {
    name:'Header',
    computed:{
        ...mapGetters('user',['isLoggin'])
    },
    methods:{
        ...mapActions('user',['logout']),
        logoutUser(){
            this.logout();
            this.$router.push('/login')
        },
        
    }
}
</script>