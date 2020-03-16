<template>
    <form @submit.prevent="submitForm">
        <div>
            <label for="username">id : </label>
            <input type="text" id="username" v-model="username"> 
        </div>
        <div>
            <label for="password">pw : </label>
            <input type="text" id="password" v-model="password">
        </div>
        <div>
            <label for="nickname">nickname : </label>
            <input type="text" id="nickname" v-model="nickname"> 
        </div>

        <button type="submit">login</button>
    </form>
</template>

<script>
import {registerUser} from '@/api/index';

export default {
    data() {
        return {
            username : '',
            password : '',
            nickname : ''
        }
    },
    methods: {
        submitForm() {
            console.log("폼 제출");
            const userData = {
                username : this.username,
                password : this.password,
                nickname : this.nickname
            }
            registerUser(userData);
        }
    }

}
</script>

<style>

</style>