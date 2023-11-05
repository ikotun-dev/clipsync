<template>
    <div style="height: auto; min-height: 70rem;" class="pb-20 bg-gray-900">
        <div class="flex justify-between">
            <h2 class="ml-7 pt-10 pb-3 text-blue-500 font-montserrat text-lg font-extrabold">dropit</h2>
            <h2 class="mr-7 mt-10  h-8  bg-blue-800 rounded-lg text-gray-200 font-montserrat text-xs p-2 font-extrabold ">{{
                currentSession }}</h2>
        </div>
        <div class="flex flex-col">
            <h4 class="ml-7 m-1 text-sm text-white font-montserrat font-bold">Type here</h4>

            <input v-model="boxContent"
                class="expandable-input text-gray-200 mt-2 mx-6 lg:ml-20 lg:mr-20 bg-gray-600 rounded-md lg:max-h-100 lg:h-16 text-xs h-14 focus:outline-none p-3 font-pop"
                type="text" />

            <!-- <div class="flex items-center justify-end mt-9 mr-48 ">
                <label for="fileInput" class="cursor-pointer mr-2 text-blue-500 font-pop-bold font-bold  w-30 px-4 hover:text-gray-300"> + attach file
                    <input id="fileInput" class="hidden" name="attach file" type="file" />
                </label>
               
            </div> -->

            <button @click="sendMessage()"
                class="absolute right-2 mt-32 font-extrabold font-montserrat  text-white mr-6 lg:mr-20 bg-blue-500 w-20 h-8 rounded-md text-xs hover:bg-blue-800">send</button>
        </div>
        <div class="flex flex-col mt-20">
            <h4 class="ml-7 mt-10 text-sm text-gray-400 font-montserrat font-bold">History</h4>

            <div v-for="(message, index) in receivedMsg" :key="index" style="height: 100%; overflow-y: auto;"
                class="flex text-gray-200 mt-2 mx-6 lg:ml-20  lg:mr-20 bg-blue-950 opacity-3 rounded-md text-xs focus:outline-none p-4 pt-6 font-pop">
                <h2 class="mr-20">{{ message }}</h2>
                <div class="cursor-pointer w-10 ml-6 lg:mr-24 mr-10 absolute right-0 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="white" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                    </svg>
                </div>


            </div>




        </div>


        <div class="ml-4 mb-10 w-32 h-8 rounded-sm bg-gray-7 00 fixed bottom-0 left-0 flex items-center justify-center">
            <i class="ml-2 mb-2 text-4xl text-green-500 mr-1">&#8226;</i>
            <h4 class="font-montserrat font-extrabold text-white text-xs">1 connected</h4>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            socket: "",
            boxContent: "",
            currentSession: "",
            receivedMsg: [],

        }
    },
    methods: {
        sendMessage() {
            let msg = this.boxContent
            this.socket.send(msg)
        }
    },

    mounted() {
        const token = localStorage.getItem("access_token");
        const code = localStorage.getItem("session_code");
        this.currentSession = code
        console.log(token)

        this.socket = new WebSocket(`ws://localhost:8000/socket?session_key=${code}`)
        this.socket.onmessage = (msg) => {
            this.receivedMsg.push(msg.data);
        }


    }

}



</script>
