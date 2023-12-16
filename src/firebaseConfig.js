// firebaseConfig.js
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDalciHtUPkvSIwbMHHe6Rl_Yr-qiMy09M',
	authDomain: 'querentlandingcontactlist.firebaseapp.com',
	projectId: 'querentlandingcontactlist',
	storageBucket: 'querentlandingcontactlist.appspot.com',
	messagingSenderId: '635635269360',
	appId: '1:635635269360:web:93f894e15f1798dd2f4c35',
	measurementId: 'G-43F0HL002K'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const contactsCollection = collection(db, 'Contacts');
