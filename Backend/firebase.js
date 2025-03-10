// Configuração do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBFLDSTBbdPfGp2DRrw4UGOd2hbqAjA4Jg",
  authDomain: "fleurapp-70f97.firebaseapp.com",
  projectId: "fleurapp-70f97",
  storageBucket: "fleurapp-70f97.firebasestorage.app",
  messagingSenderId: "24625923115",
  appId: "1:24625923115:web:386495ae0d506e9eaf166e",
  measurementId: "G-E13L2BPYKH"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
