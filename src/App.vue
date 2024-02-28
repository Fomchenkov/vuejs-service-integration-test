<template>
<div v-if="shouldShowWelcomeMessage">
    <LogoutForm @token-changed="handleTokenChanged"/>
    <Templates/>
</div>
<div v-else>
    <LoginForm @token-changed="handleTokenChanged"/>
</div>
</template>

<script setup>
import LoginForm from './components/LoginForm.vue'
import LogoutForm from './components/LogoutForm.vue'
import Templates from './components/Templates.vue';
</script>

<script>
export default {
    data() {
        return {
            token: localStorage.getItem('token'),
        };
    },
    components: {
        LoginForm,
        LogoutForm,
        Templates,
    },
    computed: {
        shouldShowWelcomeMessage() {
            return this.token;
        }
    },
    methods: {
        handleTokenChanged(newToken) {
            this.token = newToken;
        },
    }
}
</script>
