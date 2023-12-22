<template>
    <div class="h-screen bg-gray-950 flex flex-col items-center justify-center ">
        <RouterLink to="/">
            <h2 class="text-blue-500 text-xl font-montserrat font-extrabold  absolute top-10 left-0 ml-10 lg:ml-20">dropit
            </h2>
        </RouterLink>

        <!-- <div class="w-100 ml-20 hidden md:mr-14 md:block">
            <img :src="require('../assets/pana.png')">
        </div> -->

        <div class=" mb-10 flex flex-col items-center justify-cente bg-gray-950">
            <!-- <img class="w-20" :src="require('../assets/logoclip2.png')"> -->

            <h2 class="text-blue-400 font-montserrat font-extrabold text-lg  mb-2"> Hi there :) </h2>
         
       <form >
        

            <div class="flex flex-col">
               
                <input v-model="username" 
                    class="mt-2 w-72 p-2 rounded-md text-xs font-extrabold text-gray-950 text-bold font-montserrat focus:bg-gray-200 border border-3 border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text" placeholder="Username" required/>
            </div>
            <div class="mt-2 flex flex-col">
               
                <input v-model="password" 
                    class="mt-2 w-72 font-montserrat text-xs font-extrabold text-blue-800 p-2 rounded-md focus:bg-gray-200 border border-3 border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="password" placeholder="Password" required/>
            </div>
    
            <h4 v-show="no_value == true" class="text-red-600 font-montserrat mt-2 font-extrabold text-xs">Enter a valid password </h4>
            <h4 v-show="invalidCredentials === true " class="text-red-600 font-montserrat mt-2 ml-2 font-extrabold text-xs">invalid Credentials </h4>
            <button v-if="processing == false"
               type="submit"
                class="lg:mt-3 mt-3 w-72 h-8 bg-blue-900 rounded-md font-montserrat font-extrabold text-center text-gray-300 text-xs lg:text-xs hover:bg-blue-600"
                @click="ValidateCredentials()"
                >Go in &#x1F680;</button>
            <button v-else class="h-10 rounded-md w-72 mt-4 py-1 bg-blue-500 flex items-center justify-center">
                <div class=" animate-spin rounded-full  border-4 w-6 h-6 border-white border-b-gray-400 border-opacity-100  ">
                </div>
            </button>
            <RouterLink to="/">
            <div class="flex justify-center">
                <h5 class="text-blue-300 font-montserrat text-xs mt-3">&#8617; &nbsp; Go to home</h5>
            </div>
            </RouterLink>
</form>

        </div>

           


    </div>
</template>

<script>
import VueCookies from 'vue-cookie'
import axios from 'axios';
//import FooterButtom from './FooterButtom.vue'
//import VueNativeSock from 'vue-native-websocket';

export default {
    components: {
       // FooterButtom
    },

    data() {
        return {
            processing: false,
            email: '',
            password: '',
            username: '',
            no_value: false,
            short_code: false,
            notAlpha: false,
            loginSuccess : false,
            invalidCredentials : false,
            existingUser : false
        }
    },
    methods: {
    
        ValidateCredentials() {
            const password = this.password
            if (this.password.trim().length == 0) {
                this.no_value = true;
                console.log("pwd validation failed")
                setTimeout(() => { this.no_value = false; }, 4000)
            }
            else if (password.length > 1 && password.length < 8) {
                this.short_code = true;
                setTimeout(() => { this.short_code = false; }, 4000)
            }
            else {
                this.Login()
            }

        },
        async Login() {
            const userData = {
                'username' : this.username,
                'password' : this.password
            };
            let res;
            try {
                this.processing = true
                res = await axios.post('https://dropit.up.railway.app/user/login', userData, {
                    headers: {
                        'Content-Type': 'application/json',
                        // 'Authorization': 'Bearer my-authorization-token'
                    }
                })
                if (res.status === 200) {
                    this.loginSuccess = true;
                    VueCookies.set('token', res.data.token);
                    this.$router.push('/dashboard')
                    this.email ='',
                    this.password =''
                    this.username =''
                    // Handle the 409 conflict error
                } else { 
                    this.invalidCredentials = true;
                    setTimeout(() => { this.invalidCredentials = false; }, 5000)
                }
            
            }
            catch (error) {
                    // Handle other errors
                    this.invalidCredentials = true;
                    setTimeout(() => { this.invalidCredentials = false; }, 5000)
                    console.error('An error occurred:', error);
                
            }
            finally {
                this.processing = false
            }
        }
    },

}
</script>