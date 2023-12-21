<template>
    <div class="mt-3 flex flex-col  lg:px-10 px-5 lg:mx-24">
            <h3 class="font-montserrat font-extrabold text-gray-500 mb-4">Drop History</h3>

            <div v-for="session in previousSessions" :key="session._id"
                class="w-full rounded-md bg-gray-700 hover:bg-gray-800 cursor-pointer p-3 text-sm font-mono text-gray-300 flex items-center justify-between space-x-20 mb-2">
                <div class="w-36 ">
                    <h4 class="">{{ session.sessionCode }}</h4>
                </div>

                <div class="hidden lg:block">
                    <h4 class="font-mono">{{ new Date(session.createdAt).toLocaleString() }}</h4>
                </div>

                <div class="w-20 p-2  lg:flex justify-center">
                    <div class="bg-gray-600 font-montserrat px-4 py-1 rounded-md hover:bg-gray-900 cursor-pointer " @click="goToSession(session)">
                        View
                    </div>
                </div>
            </div>

        </div>


</template>
<script> 
import VueCookies from 'vue-cookie';
import axios  from 'axios';
export default { 
    components : { 

    },
    data() { 
        return { 
            previousSessions : []
        }
    },
    methods : { 
        goToSession(session) { 
            this.$router.push(`/session/${session._id}/${session.sessionCode}`)

        },

        async GetSessions() { 
            //get sessions from local storage
            const storedSessions = localStorage.getItem('previousSessions');
            if (storedSessions) { 
            this.previousSessions = JSON.parse(storedSessions);
            this.previousSessions.reverse();
            }
            let res
            //fethc from api
            const token = VueCookies.get('token');
            try  { 
                res = await axios.get('http://localhost:8000/user/get-sessions', {headers : { 'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`} })
                if (res.status == 200) {
                    this.previousSessions = res.data
                    this.previousSessions.reverse()

                    localStorage.setItem('previousSessions', JSON.stringify(res.data))
                } else {
                    this.previousSessions = []
                } if (res.status === 401){
                    this.$router.push('/login')
                }
            } catch (error) { 
                console.log(error)
                if (res.status === 401){
                    this.$router.push('/login')
                }
            }
        }
    },

    mounted() { 
        this.GetSessions()
    }
}



</script>