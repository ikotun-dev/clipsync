<template>
    <div class="h-screen bg-gray-900 flex flex-col items-center justify-center ">
        <RouterLink to="/">
            <h2 class="text-blue-500 text-xl font-montserrat font-extrabold  absolute top-10 left-0 ml-10 lg:ml-20">dropit
            </h2>
        </RouterLink>

        <!-- <div class="w-100 ml-20 hidden md:mr-14 md:block">
            <img :src="require('../assets/pana.png')">
        </div> -->

        <div class=" mb-10 flex flex-col items-center justify-center">
            <!-- <img class="w-20" :src="require('../assets/logoclip2.png')"> -->

            <h2 class="text-white font-montserrat font-bold mt-4">Join an Ongoing Session</h2>
            <h3 class="text-gray-500 font-montserrat text-xs lg:text-sm font-bold mt-4">This is session key for ongoing
                session</h3>

            <input v-model="sessionToken" @input="validateInput"
                class="mt-4 w-72 p-2 rounded-md focus:outline-none font-semibold font-pop focus:ring-4 focus:ring-blue-500"
                type="text" />
            <h4 v-show="short_code == true" class="text-red-600 font-montserrat mt-2 font-extrabold">Code is less than 8
                characters </h4>
            <h4 v-show="notAlpha == true" class="text-red-600 font-montserrat mt-2 font-bold">Code is not a valid character
                ! </h4>
            <h4 v-show="no_value == true" class="text-red-600 font-montserrat mt-2 font-extrabold">Enter a valid session
                code </h4>

            <button v-if="processing == false"
                class="mt-4 w-72 h-10 bg-blue-800 rounded-md font-montserrat font-extrabold text-center text-gray-300 text-md hover:bg-blue-600"
                @click="joinSession()">Join</button>
            <button v-else class="h-10 rounded-md w-72 mt-4 py-1 bg-blue-500 flex items-center justify-center">
                <div class=" animate-spin rounded-full  border-b-4 border-t-4 w-6 h-6 border-white border-opacity-100 ">
                </div>
            </button>


        </div>
        <div class="absolute bottom-0 ">
            <FooterButtom></FooterButtom>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
import FooterButtom from './FooterButtom.vue'
//import VueNativeSock from 'vue-native-websocket';

export default {
    components: {
        FooterButtom
    },

    data() {
        return {
            processing: false,
            sessionToken: '',
            no_value: false,
            short_code: false,
            notAlpha: false,
            sessionAlreadyExist: false,
        }
    },
    methods: {
        validateInput() {
            // Remove space characters from the input
            this.sessionToken = this.sessionToken.replace(/[\s!@#$%^&*()_+[\]\\{}|;':",.<>?]/g, '');

            // You can also add additional validation logic here if needed
        },


        InitiateSession() {
            const token = this.sessionToken
            if (this.sessionToken.length == 0) {
                this.no_value = true;

                setTimeout(() => { this.no_value = false; }, 4000)
            }
            else if (token.length > 1 && token.length < 8) {
                this.short_code = true;
                setTimeout(() => { this.short_code = false; }, 4000)
            }
            else {
                this.joinSession()
            }

        },
        async joinSession() {
            const sessionData = {
                'code': this.sessionToken
            };
            let res;
            try {
                this.processing = true
                res = await axios.post('https://faded-recess-production.up.railway.app/check', sessionData, {
                    headers: {
                        'Content-Type': 'application/json',
                        // 'Authorization': 'Bearer my-authorization-token'
                    }
                })
                if (res.status == 200) {
                    const token = res.data.token
                    const code = res.data.code
                    localStorage.setItem('access_token', token)
                    localStorage.setItem('session_code', code)
                    console.log(token)
                    // Handle the 409 conflict error
                    this.$router.push('/session')

                }
            }
            catch (error) {
                if (error.response && error.response.status === 409) {

                    //this.sessionAlreadyExist = true;
                    setTimeout(() => { this.sessionAlreadyExist = false }, 4000);
                } else {
                    // Handle other errors
                    console.error('An error occurred:', error);
                }
            }
            finally {
                this.processing = false
            }
        }
    },

}
</script>