export const firebaseConfig = {
    apiKey: process.env.FIREBASE_WEB_KEY,
    authDomain: `${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
    databaseURL: "https://DATABASE_NAME.firebaseio.com",
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: `${process.env.FIREBASE_PROJECT_ID}.appspot.com`,
    messagingSenderId: process.env.FIREBASE_PROJECT_UNIQUE,
    appId: `1:${process.env.FIREBASE_PROJECT_UNIQUE}:web:a98f09dde6cf7bcee41565`,
    measurementId: "G-BB8EMTM43L"
}; 