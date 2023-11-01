<template>
    <div class="h-[92vh] bg-gray-900 flex items-center justify-center lg:justify-between">
        <div class="w-100 ml-20 hidden md:mr-14 md:block">
            <img  :src="require('../assets/pana.png')">
        </div>

        <div class="lg:mr-64  mb-40 flex flex-col items-center justify-center md:mr-6">
            <!-- <img class="w-20" :src="require('../assets/logoclip2.png')"> -->
            <h2 class="text-blue-500 text-2xl font-montserrat font-bold mt-4">Drop.it</h2>
            <h2 class="text-white font-montserrat font-bold mt-4">Enter your session code</h2>
              
               
                <input v-model="sessionToken" class="mt-4 w-72 p-2 rounded-md focus:outline-none font-semibold font-pop focus:ring-4 focus:ring-blue-500"  type="text"/>
                <h4 v-show="short_code == true" class="text-red-600 font-montserrat mt-2 font-extrabold">Code is less than 8 characters </h4>
                <h4 v-show="no_value == true" class="text-red-600 font-montserrat mt-2 font-extrabold">Enter a valid session code </h4>
                <button v-if="processing == false" class="mt-4 w-72 h-10 bg-blue-800 rounded-md font-montserrat font-extrabold text-center text-white text-md hover:bg-blue-500" @click="InitiateSession()">Initiate Session</button>
                <button v-else class="h-10 rounded-md w-72 mt-4 py-1 bg-blue-500 flex items-center justify-center">
                    <div class=" animate-spin rounded-full  border-b-4 border-t-4 w-6 h-6 border-white border-opacity-100 "></div>
                </button>
              
           
        </div>
       
    </div>
    <FooterButtom></FooterButtom>
</template>

<script>
import axios from 'axios';
import FooterButtom from './FooterButtom.vue'
//import VueNativeSock from 'vue-native-websocket';

export default{
    components : { 
        FooterButtom
    },

    data(){ 
        return {
            processing : false,
            sessionToken : '',
            no_value : false,
            short_code : false,
        }
    },
    methods : { 

        InitiateSession(){
            const token = this.sessionToken
            if (this.sessionToken.length  == 0){
                this.no_value = true;

                setTimeout(()=> {this.no_value = false;}, 4000)
            }
            else if (token.length > 1 && token.length < 8){
                this.short_code = true;
                setTimeout(() => {this.short_code = false;}, 4000)
            }  
            else {
                this.createSession()
            }
            
        },
        async createSession(){
            try{
                this.processing = true
                const res = await axios.post(`http://127.0.0.1:8000/session/new?session_key=${this.sessionToken}`)
                if (res.status == 201){
                    const token  = res.data.token
                    localStorage.setItem('access_token', token)
                    console.log(token)
                    this.$router.push('/session')
                }
            }
            catch(error){
                console.log(error)
            }
            finally{
                this.processing = false
            }
        }
    },

}
</script>