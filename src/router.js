import { createRouter, createWebHashHistory } from "vue-router";
import HeaderTop from './components/HeaderTop.vue'
import MajorPage from './components/MajorPage.vue'
import MainPage from './components/MainPage.vue'
import JoinSession from './components/JoinSession.vue'
import SignUp from './components/SignUp.vue'

const routes = [ 
    { 'path' : '/' ,  component : MainPage },
    { 'path' : '/newjs' ,  component : HeaderTop },
    {'path' : '/session', component : MajorPage},
    {'path' : '/session/join', component: JoinSession},
    {'path' : '/new', component: SignUp}
]

const router = createRouter({
   history : createWebHashHistory('clipsync'), routes
})

export default router