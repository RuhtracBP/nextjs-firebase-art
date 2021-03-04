import admin from 'firebase-admin';

const serviceAccount = require('./secrets.json');


export const verifyIdToken = (token: string) => {
    if(!admin.app.length) {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            
        })
    }
}