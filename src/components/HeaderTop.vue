<template>
    <div class="h-screen lg:h-screen bg-black flex items-center justify-center lg:justify-between">
        <div class="w-100 ml-20 hidden lg:block">
            <img  :src="require('../assets/pana.png')">
        </div>

        <div class="lg:mr-64 md:mr-52 mb-40 flex flex-col items-center justify-center ">
            <!-- <img class="w-20" :src="require('../assets/logoclip2.png')"> -->
            <h2 class="text-blue-500 text-2xl font-montserrat font-bold mt-4">Digipulse</h2>
            <h2 class="text-white font-montserrat font-bold mt-4">Enter your session code</h2>
            
               
                <input class="mt-4 w-72 p-2 rounded-md focus:outline-none font-semibold font-pop focus:ring-4 focus:ring-blue-500" v-model="sessionToken" type="text"/>

                <button class="mt-4 w-72 h-10 bg-blue-500 rounded-md font-montserrat font-extrabold text-center text-white text-md hover:bg-blue-800">Create/Join Session</button>
            
           
        </div>
       
    </div>
</template>
<script>
import VueNativeSock from 'vue-native-websocket';

export default{
    data(){ 
        return {
            sessionToken : null,
        }
    },
    methods : { 
       
    },
    created() {
    this.$options.sockets = {
      mySocket: new VueNativeSock({
        debug: true,
        connection: 'ws://127.0.0.1:8000', // Replace with your actual WebSocket backend URL
      }),
    };
}

}
</script>