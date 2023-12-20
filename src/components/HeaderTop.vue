<template>
    <div class="h-screen bg-gray-950 flex flex-col items-center justify-center ">
        <div class="flex justify-between items-center">
           
            <h2 @click="$router.go(-1)" class="text-blue-500 text-sm font-montserrat font-extrabold  absolute top-12 left-0 ml-10 lg:ml-20 cursor-pointer "> &LessLess; Back 
            </h2>
       

      
        <RouterLink to="/">
            <div class=" bg-blue-600 p-2 rounded-md hover:bg-blue-800 text-gray-200 font-montserrat text-sm cursor-pointer  absolute top-10 right-0 mr-10 lg:mr-20">
               <i class="fa-solid fa-user-shield text-xl"></i>
        </div>
        </RouterLink>
        </div>
      

        <!-- <div class="w-100 ml-20 hidden md:mr-14 md:block">
            <img :src="require('../assets/pana.png')">
        </div> -->

        <div class=" mb-10 flex flex-col items-center justify-center">
            <!-- <img class="w-20" :src="require('../assets/logoclip2.png')"> -->

            <h2 class="text-white font-montserrat font-bold mt-4">Open a new drop</h2>
            <h3 class="text-gray-500 font-montserrat text-xs lg:text-sm font-bold mt-4">This is unique to your drop and
                restricts access</h3>

            <input v-model="sessionToken" @input="validateInput"
                class="animate-shake mt-4 w-72 p-2 rounded-md focus:outline-none font-semibold font-pop focus:ring-4 focus:ring-blue-500"
                type="text" />
            <h4 v-show="short_code == true" class="text-red-600 font-montserrat mt-2 font-extrabold">Code is less than 8
                characters </h4>
            <h4 v-show="notAlpha == true" class="text-red-600 font-montserrat mt-2 font-bold">Code is not a valid character
                ! </h4>
            <h4 v-show="no_value == true" class="text-red-600 font-montserrat mt-2 font-extrabold">Enter a valid session
                code </h4>
            <h4 v-show="sessionAlreadyExist == true" class="text-red-600 font-montserrat mt-2 font-extrabold text-sm">Session with this Code is Ongoing
                 </h4>
 
            <button v-if="processing == false"
                class="mt-4 w-72 h-10 bg-blue-800 rounded-md font-montserrat font-extrabold text-center text-gray-300 text-md hover:bg-blue-600"
                @click="InitiateSession()">Initiate drop</button>
            
            <button v-else class="h-10 rounded-md w-72 mt-4 py-1 bg-blue-500 flex items-center justify-center">
                <div class=" animate-spin rounded-full  border-4 w-6 h-6 border-white border-b-gray-400 border-opacity-100 ">
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
import Vuecookies from 'vue-cookie';

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
                this.createSession()
            }

        },
        async createSession() {
            const sessionData = {
                'sessionCode': this.sessionToken
            };

            try {
                this.processing = true
                const res = await axios.post('http://127.0.0.1:8000/user/create-session', sessionData, {
                    headers: {
                        'Content-Type': 'application/json',
                         'Authorization': `Bearer ${Vuecookies.get('token')}`
                    }
                })
                if (res.status == 201) {
                    console.log(res.data)
                    Vuecookies.set('sessionId', res.data.savedSession._id)
                    //set sessionCode 
                    Vuecookies.set('sessionCode', sessionData.sessionCode)
                    this.$router.push({ name: 'session', params: { code: this.sessionToken, sessionVal : Vuecookies.get('sessionCode') } });
                    //this.$store.state.sessionCode = sessionData.sessionCode
                }
            }
            catch (error) {
                if (error.response && error.response.status === 400) {
                    // Handle the 409 conflict error
                    this.sessionAlreadyExist = true;
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