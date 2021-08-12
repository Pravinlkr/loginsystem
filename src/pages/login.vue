<template>
    <div>
        <Header/>
        <section class="hero is-small">
        <div class="hero-body">
            <div class="columns is-centered">
                <div class="column is-6-tablet is-2-desktop">
                    <p class="subtitle"> Login Page </p>
                </div>
            </div>
        </div>
    </section>
    <Form/>
    </div>
</template>
<script>
import Header from '../components/header.vue'
import Form from '../components/form.vue'
export default {
    name:'Login',
    components: {
        Header,
        Form
    }
}
</script>