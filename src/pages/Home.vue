<template>
<div>
    <Header/>
    <section class="hero is-small">
        <div class="hero-body">
            <div class="columns is-centered">
                <div class="column is-5-tablet is-2-desktop">
                    <p class="subtitle"> Home Page, Visit Your <a v-on:click="userProfile()" v-if="isLoggin">
                        <strong>Profile</strong>
                    </a></p>
                </div>
            </div>
        </div>
    </section>
</div>
</template>
<script>
import Header from '../components/header.vue'
import {mapGetters} from 'vuex';
export default {
    name:'Home',
    methods:{
        userProfile(){
            this.$router.push('/profile')
        }
    },
    computed:{
        ...mapGetters('user',['isLoggin'])
    },
    components: {
    Header
  }
}
</script>