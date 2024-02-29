<template>
    Добро пожаловать!
    <button @click="logoutService">Выйти</button>
</template>

<script setup>
import axios from 'axios';
import { router } from '../main';
</script>

<script>
export default {
    data() {
        return {
            token: localStorage.getItem('token'),
        }
    },
    methods: {
        logoutService() {
            axios.post('http://94.241.139.185:8000/users/auth/logout/', {}, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + this.token
                },
            })
            .then(response => {
                console.log('Ответ сервера:', response.data);
                console.log('Код ответа:', response.status);
                this.response = response.data;
                this.token = null;
                // this.$emit('token-changed', null);

                localStorage.removeItem('token');

                router.push('/login');
            })
            .catch(error => {
                console.error('Ошибка при выполнении запроса:', error);
                this.response = error;
                console.log(this.response)
            });
        }
    },
}
</script>
