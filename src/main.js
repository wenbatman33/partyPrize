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
  apiKey: "AIzaSyAsjyDx19bBE5FOaIb2zcjbZpVzgI9VMuk",
  authDomain: "party2020-4bfbf.firebaseapp.com",
  databaseURL: "https://party2020-4bfbf.firebaseio.com",
  projectId: "party2020-4bfbf",
  storageBucket: "party2020-4bfbf.appspot.com",
  messagingSenderId: "760942460458",
  appId: "1:760942460458:web:d4ad373d1fb7c656920d53",
  measurementId: "G-FZPH68K693"
});
// firebase.firestore().settings({ timestampsInSnapshots: true })
Vue.config.productionTip = false;
export const db = firebase.firestore()
Vue.config.ignoredElements = ['qrcode-reader','QrcodeReader']

new Vue({
  render: h => h(App)
}).$mount('#app')
