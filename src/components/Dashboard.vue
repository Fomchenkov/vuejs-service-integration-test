<template>
<div>
    <p><a v-bind:href="swagger_url" target="_blank">Документация</a></p>

    <LogoutForm/>
    <Templates/>

    <img src="/images/Logo.png" alt="Логотип">
</div>
</template>

<script setup>
import LogoutForm from './LogoutForm.vue'
import Templates from './Templates.vue';
</script>

<script>
export default {
    data() {
        return {
            token: localStorage.getItem('token'),
            swagger_url: 'http://94.241.139.185:8000/api/v1/swagger/',
        };
    },
    components: {
        LogoutForm,
        Templates,
    },
}
</script>
