<template>
    <input type="text" v-model="login" name="login">
    <input type="password" v-model="password" name="password">
    <button @click="loginService">Получить токен</button>
    <p>{{ response }}</p>
</template>

<script setup>
import axios from 'axios';
import { router } from '../main';
</script>

<script>
export default {
    data() {
        return {
            login: '',
            password: '',
            response: '',
            token: localStorage.getItem('token'),
        }
    },
    methods: {
        loginService() {
            axios.post('http://94.241.139.185:8000/users/auth/login/', {
                email: this.login,
                password: this.password
            })
            .then(response => {
                console.log('Ответ сервера:', response.data);
                console.log('Код ответа:', response.status);

                this.response = response.data;
                this.token = response.data.token;
                // this.$emit('token-changed', response.data.token);

                localStorage.setItem('token', response.data.token);

                router.push('/dashboard');
            })
            .catch(error => {
                console.error('Ошибка при выполнении запроса:', error);
                this.response = error;
                console.log(this.response)
            });
        },
    }
}
</script>
