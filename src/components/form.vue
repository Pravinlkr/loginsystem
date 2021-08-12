<template>
    <section class="mt-4">
        <div class="columns is-centered">
            <div class="column is-10-mobile is-offset-1-mobile is-4">
                <div class="box">
                    <p class=" mb-4" v-if="message">{{message}}</p>
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                        <input class="input" type="email" v-model="email" placeholder="e.g. alex@example.com">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Password</label>
                        <div class="control">
                        <input class="input" type="password" v-model="password" placeholder="********">
                        </div>
                    </div>
                    <button class="button is-fullwidth is-success" v-on:click="getLoggedIn()">Log in</button>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
import {mapActions} from 'vuex';
    export default {
        name:'Form',
        data(){
            return{
                email:'',
                password:'',
                message:''
            }
        },
        watch:{
            email(val){
                val = val.trim('');
                if(val){
                    this.message = ''
                }
            },
            password(val){
                val = val.trim('');
                if(val){
                    this.message = ''
                }
            }
        },
        methods:{
            ...mapActions('user',['login']),
            getLoggedIn(){
                this.email = this.email.trim('');
                this.password = this.password.trim('');
                if(this.email && this.password){
                    this.login({email:this.email, password:this.password});
                    this.email = '';
                    this.password = '';
                    this.message = '';
                    this.$router.push('/profile')
                }else{
                    this.message = 'Both Fields Are Required'
                }
            }
        }
    }
</script>