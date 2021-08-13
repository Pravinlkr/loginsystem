<template>
<div>
    <Header/>
    <section class="hero is-small">
        <div class="hero-body">
            <div class="columns is-centered">
                <div class="column is-5-tablet is-2-desktop">
                    <p class="subtitle"> Welcome {{getUserEmail}} </p>
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
    name:'Profile',
    data(){
        return{
            userName:''
        }
    },
    components: {
        Header
    },

    computed:{
        ...mapGetters('user',['getUserEmail'])
    },
}
</script>