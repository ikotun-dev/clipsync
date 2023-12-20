<template>
    <div class="bg-gray-950 pt-10 lg:pt-10 min-h-screen pb-20 ">

        <div class="flex  justify-between space-x-6 lg:space-x-52 mx-4 lg:mx-24">
            <RouterLink to="/">
                <div>
                    <h3 class="font-montserrat font-extrabold text-blue-700 ml-4 mt-2 text-md">dropit</h3>
                </div>
            </RouterLink>
            <div class="flex justify-center items-center space-x-3">
                <RouterLink to="create-session">
                    <div
                        class=" bg-blue-600 p-2 rounded-md hover:bg-blue-800 text-gray-200 font-montserrat text-sm cursor-pointer">
                        <i class="fa-solid fa-folder-plus text-xl"></i>
                    </div>
                </RouterLink>
                <div class="bg-blue-600 p-2 rounded-md">
                    <i class="fa-solid fa-user-shield text-white text-lg"></i>
                </div>
            </div>
        </div>
        <div class="mt-12 pb-10 flex justify-center space-x-10">
            <div class="px-5  text-gray-400 hover:text-gray-100  hover:border-blue-400 cursor-pointer"
                :class="{ 'border-blue-600 border-b-2  font-extrabold': showSessionHistory}" @click="toogleSessionHistory">
                <h3 class=" font-montserrat ">Drops</h3>
            </div>
            <div class="px-5  text-gray-400 hover:text-gray-100  hover:border-blue-400 cursor-pointer"
                :class="{ 'border-blue-600 border-b-2 font-extrabold': showFileHistory }" @click="toogleFileHistory">
                <h3 class=" font-montserrat ">Files</h3>
            </div>
            <div class="px-5  text-gray-400 hover:text-gray-100 border-blue-600 hover:border-blue-400 cursor-pointer"
                :class="{ 'border-blue-600 border-b-2 font-extrabold': showTextHistory }" @click="toogleTextHistory">
                <h3 class=" font-montserrat ">Texts</h3>
            </div>
        </div>
        <SessionHistory v-show="showSessionHistory === true"></SessionHistory>
        <FileHistory v-show="showFileHistory === true"></FileHistory>
        <TextHistory v-show="showTextHistory === true"></TextHistory>
   
       <RouterLink to="create-session">
       <div class="fixed border-gray-950 font-extrabold bottom-10 right-7 lg:right-25 hover:bg-gray-900 bg-gray-800 px-5 py-4 rounded-full cursor-pointer">
        <i class="text-white fas fa-plus font-extrabold"></i>
        </div>
       </RouterLink>
    </div>
   
</template>

<script>
import Vuecookies from 'vue-cookie'
import SessionHistory from './SessionHistory'
import FileHistory from './FileHistory'
import TextHistory from './TextHistory'
//import FooterButtom from './FooterButtom.vue'
export default {
    components: {
        SessionHistory,
        FileHistory,
        TextHistory,
        //FooterButtom
    },
    data() {
        return {
            showSessionHistory: true,
            showFileHistory: false,
            showTextHistory: false,
        }
    },
    methods: {
        checkAuth() { 
            const token = Vuecookies.get('token')
            if (!token) { 
                this.$router.push('/login')
            }
        },
        toogleSessionHistory() {
            this.showSessionHistory = true,
                this.showFileHistory = false,
                this.showTextHistory = false
        },
        toogleFileHistory() {
            this.showSessionHistory = false,
                this.showFileHistory = true,
                this.showTextHistory = false
        },
        toogleTextHistory() {
            this.showSessionHistory = false,
                this.showFileHistory = false,
                this.showTextHistory = true
        }
    },

    mounted() { 
        this.checkAuth();
    }
}

</script>