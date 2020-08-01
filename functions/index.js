const functions = require('firebase-functions');
const admin= require("firebase-admin")

admin.initializeApp(functions.config().firebase)

 exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
 });

 const creatNote=(notification =>{

    return admin.firestore()
    .collection("notification")
    .add(notification)
    .then(doc=> console.log('notification added',doc))
 })

 exports.reportCreated= functions.firestore
 .document('test/{projectId}')
 .onCreate(doc=>{

    const report=doc.data()

    const notification = {
        text: 'new report added',
        user:`${report.name}`,
        time:admin.firestore.FieldValue.serverTimestamp()
    }

    return creatNote(notification)
 }

 )

 exports.newReport= functions.firestore
 .document('test/{projectId}')
 .onUpdate(doc=>{

    const report=doc.data()

    const notification = {
        text: 'new report added',
        user:`${report.name}`,
        time:admin.firestore.FieldValue.serverTimestamp()
    }

    return creatNote(notification)
 }

 )