import { createRouter, createWebHashHistory } from "vue-router";
import HeaderTop from './components/HeaderTop.vue'
import MajorPage from './components/MajorPage.vue'
import MainPage from './components/MainPage.vue'
import JoinSession from './components/JoinSession.vue'
import SignUp from './components/SignUp.vue'
import UserDashboard from './components/UserDashboard.vue'
import LoginPage from './components/LoginPage.vue'

const routes = [
    { 'path': '/', component: MainPage },
    { 'path': '/create-session', component: HeaderTop },
    { 'path': '/session/:sessionId/:sessionVal', name: 'session', component: MajorPage, props: true },
    { path: '/session/join', component: JoinSession },
    { 'path': '/new', component: SignUp },
    { 'path': '/dashboard', component: UserDashboard },
    { 'path': '/login', component: LoginPage }
]

const router = createRouter({
    history: createWebHashHistory('clipsync'), routes
})

router.afterEach(() => {
    window.scrollTo(0, 0);
});

export default router

