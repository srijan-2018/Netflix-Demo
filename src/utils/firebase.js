// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyD2ps20_X1qMy3a9fRGo0S9z2v4g4t7vMc',
	authDomain: 'netflixgpt-c8cae.firebaseapp.com',
	projectId: 'netflixgpt-c8cae',
	storageBucket: 'netflixgpt-c8cae.appspot.com',
	messagingSenderId: '810063603136',
	appId: '1:810063603136:web:3c5b5723a31ecf40341425',
	measurementId: 'G-PJ614DNQFY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
