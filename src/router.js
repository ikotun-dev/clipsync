import { createRouter, createWebHashHistory } from "vue-router";
import HeaderTop from './components/HeaderTop.vue'
import MajorPage from './components/MajorPage.vue'
const routes = [ 
    { 'path' : '/' ,  component : HeaderTop },
    {'path' : '/session', component : MajorPage}
]

const router = createRouter({
   history : createWebHashHistory('clipsync'), routes
})

export default router