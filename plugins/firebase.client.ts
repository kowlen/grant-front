import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics"

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()

    const firebaseConfig = {
        apiKey: "AIzaSyBG2WJujvyaNxpPAod8F5j8JeTB_aotNU8",
        authDomain: "grant-791f8.firebaseapp.com",
        projectId: "grant-791f8",
        storageBucket: "grant-791f8.appspot.com",
        messagingSenderId: "884662298544",
        appId: "1:884662298544:web:0a190f3711187d238b1875",
        measurementId: "G-P0N5QGY6N4"
    };

    const app = initializeApp(firebaseConfig)

    const analytics = getAnalytics(app)
    const auth = getAuth(app)
    const firestore = getFirestore(app)

    nuxtApp.vueApp.provide('auth', auth)
    nuxtApp.provide('auth', auth)

    nuxtApp.vueApp.provide('firestore', firestore)
    nuxtApp.provide('firestore', firestore)
})
