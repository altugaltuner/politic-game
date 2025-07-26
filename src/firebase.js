import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Firebase yapılandırması - Geçici olarak devre dışı
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "dummy-api-key",
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "dummy-auth-domain",
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "dummy-project-id",
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "dummy-storage-bucket",
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "123456789",
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "dummy-app-id",
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "dummy-measurement-id",
};

// Firebase uygulamasını yalnızca bir kez başlat
let app;
let analytics;
let db;
let auth;

try {
    app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
    // Analytics'i başlat
    analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
    // Firebase servislerini başlat
    db = getFirestore(app); // Firestore
    auth = getAuth(app); // Authentication
} catch (error) {
    console.warn("Firebase başlatılamadı:", error.message);
    // Firebase olmadan da çalışabilmesi için dummy değerler
    app = null;
    analytics = null;
    db = null;
    auth = null;
}

export { analytics };
export { db };
export { auth };






