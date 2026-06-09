import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ?? 'AIzaSyAmqRTGt6pCn8gfJKnDNtoO3OcNu80e4PM',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ?? 'final-year-project-rdd.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID ?? 'final-year-project-rdd',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ?? 'final-year-project-rdd.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ?? '452847240705',
  appId: import.meta.env.VITE_FIREBASE_APP_ID ?? '1:452847240705:web:a1dedd3f9eb77a247c2200',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID ?? 'G-5HDDD8D9QK',
};

export const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
