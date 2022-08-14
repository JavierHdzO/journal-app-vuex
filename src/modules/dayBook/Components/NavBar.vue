<template>
    <nav class="navbar bg-primary">
        <a class="navbar-brand text-white">
            <img 
                class="d-inline-block align-text-top mx-2"
                src="./../../../assets/logo.png"
                alt="vue logo"
                height="24">
                {{username}}
        </a>

        <div class="d-flex">
            <button 
                @click="onLogout"
                class="btn btn-outline-info" 
                title="sign out"> 
                <i class="fa fa-sign-out-alt"> </i>
            </button>
        </div>
    </nav>
</template>

<script>
import { useRouter } from 'vue-router'
import useAuth from '@/modules/auth/composables/useAuth'


export default {
    setup() {
        const router = useRouter()
        const { username, logout } = useAuth()

        return {
            username,
            onLogout: () => {
                router.push({name: 'login'})
                logout()
            }
        }
        
    }
}
</script>