import Vue from 'vue'
import App from './App.vue'
import VueQrcodeReader from 'vue-qrcode-reader'
// import VueFire from 'vuefire'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

Vue.use(VueQrcodeReader)
// Vue.use(VueFire)
Vue.use(firestorePlugin)
firebase.initializeApp({
  apiKey: "AIzaSyB8wsv5ZBbqNb_Rt5Fq_6-ICcMhM0lGcfw",
  authDomain: "party-39350.firebaseapp.com",
  databaseURL: "https://party-39350.firebaseio.com",
  projectId: "party-39350",
  storageBucket: "party-39350.appspot.com",
  messagingSenderId: "82383501173",
  appId: "1:82383501173:web:78a0141942a6449a79453c",
  measurementId: "G-WPCQ61C6K1"
});
// firebase.firestore().settings({ timestampsInSnapshots: true })
Vue.config.productionTip = false;
export const db = firebase.firestore()
Vue.config.ignoredElements = ['qrcode-reader','QrcodeReader']

new Vue({
  render: h => h(App)
}).$mount('#app')
