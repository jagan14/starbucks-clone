import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAt9HErhyyMgRQH_vsaTQKqAbKAaSMPlDA",
  authDomain: "starbucks-clone-fd577.firebaseapp.com",
  projectId: "starbucks-clone-fd577",
  storageBucket: "starbucks-clone-fd577.appspot.com",
  messagingSenderId: "661366774500",
  appId: "1:661366774500:web:6f2bd3ca4b65e458f8eaf1",
  measurementId: "G-VN94WV08HZ"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }
