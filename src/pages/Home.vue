<template>
<div>
    <Header/>
    <section class="hero is-small">
        <div class="hero-body">
            <div class="columns is-centered">
                <div class="column is-5-tablet is-2-desktop">
                    <p class="subtitle"> Home Page </p>
                </div>
            </div>
        </div>
    </section>
</div>
</template>
<script>
import Header from '../components/header.vue'
export default {
    name:'Home',
    components: {
    Header
  }
}
</script>