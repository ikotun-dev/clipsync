<template>
    <div>
        <ShareSession :code="currentSession" v-if="shareSessionComponent === true" @close="shareSessionComponent = false">
        </ShareSession>
        <div style="height: auto; min-height: 70rem;" class="pb-20 bg-gray-900">
            <div class="flex justify-between">
                <h2 class="ml-7 pt-10 pb-3 text-blue-500 font-montserrat text-lg font-extrabold">dropit</h2>
                <h2
                    class="mr-7 mt-10  h-8 lg:mr-20 bg-blue-800 rounded-lg text-gray-200 font-montserrat text-xs p-2 font-extrabold ">
                    {{
                        currentSession }}</h2>
            </div>
            <div class="flex flex-col">

                <div class=" flex ml-7 mt-6 mb-3 h-8 lg:h-8 lg:w-12 w-12 rounded-lg px-4 pt-2 bg-blue-900 hover:bg-blue-500 cursor-pointer"
                    @click="openShareModal">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="white" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                    </svg>

                    <!-- <h2
                    class="hidden lg:block ml-1  h-8 lg:mr-2rounded-lg text-gray-900 font-montserrat mt-1 text-xs lg:text-xs  font-extrabold ">
                    share</h2>-->
                </div>

                <h4 class="ml-7  text-sm text-white font-montserrat font-bold">Type here</h4>

                <input v-model="boxContent"
                    class="expandable-input text-gray-200 mt-2 mx-6 lg:ml-20 lg:mr-20 bg-gray-600 rounded-md lg:max-h-100 lg:h-16 text-xs h-14 focus:outline-none p-3 font-pop"
                    type="text" />

                <button @click="sendMessage()"
                    class="absolute right-2 mt-56 font-extrabold font-montserrat  text-white mr-6 lg:mr-20 bg-blue-500 w-20 h-8 rounded-md text-xs hover:bg-blue-800">send</button>
            </div>
            <div class="flex flex-col mt-20">
                <h4 class="ml-7 mt-10 text-sm text-gray-400 font-montserrat font-bold">History</h4>

                <div v-for="(message, index) in receivedMsg" :key="index" style="height: 100%; overflow-y: auto;"
                    class="flex text-gray-200 mt-2 mx-6 lg:ml-20  lg:mr-20 bg-blue-950 opacity-3 rounded-md text-xs focus:outline-none p-4 pt-6 font-pop">
                    <h2 class="mr-20 text-xs" v-if="copied === true">copied</h2>
                    <h2 class="mr-20">{{ message }}</h2>

                    <div @click="copyMessage(index)" class="cursor-pointer w-10 ml-6 lg:mr-24 mr-10 absolute right-0 ">
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
                <h4 class="font-montserrat font-extrabold text-white text-xs"> connected</h4>
            </div>

        </div>
    </div>
</template>

<script>
import ShareSession from './ShareSession.vue'
export default {
    components: {
        ShareSession
    },
    data() {
        return {
            copied: false,
            socket: "",
            boxContent: "",
            currentSession: "",
            receivedMsg: [],
            shareSessionComponent: false,

        }
    },
    methods: {
        sendMessage() {
            let msg = this.boxContent
            this.socket.send(msg)
        },
        openShareModal() {
            this.shareSessionComponent = true;
        },
        copyMessage(index) {

            const message = this.receivedMsg[index];
            navigator.clipboard.writeText(message);
            this.copied = true
            setTimeout(() => { this.copied = false}, 500)
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
