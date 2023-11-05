<template>
    <div class="h-screen bg-gray-900">
        <div class="flex justify-between">
            <h2 class="ml-7 pt-10 pb-3 text-blue-500 font-montserrat text-lg font-extrabold">dropit</h2>
            <h2 class="mr-7 mt-10  h-8  bg-blue-800 rounded-lg text-gray-200 font-montserrat text-xs p-2 font-extrabold ">{{ currentSession }}</h2>
        </div>
        <div class="flex flex-col">
            <h4 class="ml-12 m-1 text-sm text-white font-montserrat font-bold">Type here</h4>

            <input v-model="boxContent"
                class="expandable-input text-gray-200 mt-2 mx-6 lg:ml-20 lg:mr-20 bg-gray-600 rounded-md lg:max-h-100 lg:h-16 text-xs h-14 focus:outline-none p-3 font-pop"
                type="text" />

            <!-- <div class="flex items-center justify-end mt-9 mr-48 ">
                <label for="fileInput" class="cursor-pointer mr-2 text-blue-500 font-pop-bold font-bold  w-30 px-4 hover:text-gray-300"> + attach file
                    <input id="fileInput" class="hidden" name="attach file" type="file" />
                </label>
               
            </div> -->

            <button
                class="absolute right-2 mt-32 font-extrabold font-montserrat  text-white mr-6 lg:mr-20 bg-blue-500 w-20 h-8 rounded-md text-xs hover:bg-blue-800">send</button>
        </div>
        <div class="ml-4 mb-10 w-32 h-8 rounded-sm bg-gray-7 00 absolute bottom-0 left-0 flex items-center justify-center">
            <i class="ml-2 mb-2 text-4xl text-green-500 mr-1">&#8226;</i>
            <h4 class="font-montserrat font-extrabold text-gray-500 text-xs">3 connected</h4>
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
        }
    },
    mounted() {
        const token = localStorage.getItem("access_token");
        const code = localStorage.getItem("session_code");
        this.currentSession = code
        console.log(token)

        this.socket = new WebSocket(`ws://localhost:8000/socket?session_key=${code}`)


    }

}



</script>
