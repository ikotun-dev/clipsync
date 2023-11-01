<template>
    <div class="h-screen bg-gray-900 flex items-center justify-center lg:justify-between">
        <div class="w-100 ml-20 hidden md:mr-14 md:block">
            <img  :src="require('../assets/pana.png')">
        </div>

        <div class="lg:mr-64  mb-40 flex flex-col items-center justify-center md:mr-6">
            <!-- <img class="w-20" :src="require('../assets/logoclip2.png')"> -->
            <h2 class="text-blue-500 text-2xl font-montserrat font-bold mt-4">Drop.it</h2>
            <h2 class="text-white font-montserrat font-bold mt-4">Enter your session code</h2>
              
               
                <input class="mt-4 w-72 p-2 rounded-md focus:outline-none font-semibold font-pop focus:ring-4 focus:ring-blue-500"  type="text"/>
                <h4 v-show="no_value == true" class="text-red-600 font-montserrat mt-2 font-extrabold">Invalid session code </h4>
                <button v-if="processing == false" class="mt-2 w-72 h-10 bg-blue-800 rounded-md font-montserrat font-extrabold text-center text-white text-md hover:bg-blue-500" @click="checkSession(), validateSession()">Initiate Session</button>
                <button v-else class="h-10 rounded-md w-72 mt-4 py-1 bg-blue-500 flex items-center justify-center">
                    <div class=" animate-spin rounded-full border-l-4 border-b-4 border-t-4 w-8 h-8 border-white border-opacity-100 "></div>
                </button>
              
           
        </div>
       
    </div>
</template>
<script>

//import VueNativeSock from 'vue-native-websocket';

export default{
    data(){ 
        return {
            processing : false,
            sessionToken : '',
            no_value : false,
            short_code : false,
        }
    },
    methods : { 
        checkSession() { 
            if (this.sessionToken == ''){
                this.no_value = true;
            }
        },
        validateSession(){
            const token = this.sessionToken
            if (token.length < 8){
                this.short_code = true
            }  
        },

       
    },
//     created() {
//     this.$options.sockets = {
//       mySocket: new VueNativeSock({
//         debug: true,
//         connection: 'ws://127.0.0.1:8000', // Replace with your actual WebSocket backend URL
//       }),
//     };6
}
</script>