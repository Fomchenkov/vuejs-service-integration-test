<template>
<h2>Список шаблонов:</h2>
<div v-for="template in templates_data">
    <TemplateItem v-bind:id="template.id" v-bind:name="template.name" />
</div>
<p>{{ response_error }}</p>
</template>

<script setup>
import axios from 'axios';
import TemplateItem from './TemplateItem.vue'
</script>

<script>
export default {
    data() {
        return {
            token: localStorage.getItem('token'),
            templates_data: null,
            response_error: null,
        }
    },
    created() {
        this.templates_data = this.getTemplatesData();
    },
    components: {
        TemplateItem,
    },
    methods: {
        getTemplatesData() {
            console.log(this.token)
            axios.get('http://94.241.139.185:8000/users/template-fields/', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + this.token
                },
            })
            .then(response => {
                console.log('Ответ сервера:', response.data);
                console.log('Код ответа:', response.status);

                this.templates_data = response.data;
            })
            .catch(error => {
                console.error('Ошибка при выполнении запроса:', error);
                this.response_error = error;
                console.log(this.response_error)
            });
        },
    }
}
</script>
