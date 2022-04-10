import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/global.css'
import './assets/reset.css'
import { createStore } from 'vuex'
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyB38JcfJl1WGmx_kF0YFBJpOqK3Ucrzj1M",
  authDomain: "marinas-content.firebaseapp.com",
  databaseURL: "https://marinas-content-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "marinas-content",
  storageBucket: "marinas-content.appspot.com",
  messagingSenderId: "70871865213",
  appId: "1:70871865213:web:b0dbba27a4ebc987069e14"
};

const app = initializeApp(firebaseConfig)
// Get a reference to the database service
const db = getDatabase(app)

// Create a new store instance.
export const store = createStore({
  state () {
    return {
      data: null
    }
  },
  mutations: {
    initializeData (state, payload) {
      state.data = payload;
    }
  },
  actions:{
    // action to return data from db and save it on stor state
    getAsyncData: ({commit}) => {
      const starCountRef = ref(db, 'messages')
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        commit('initializeData', data)
      })
    } 
  }
})

createApp(App).use(store).use(router).mount('#app')