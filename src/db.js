import * as firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  projectId: "react-training-4c1ef"
});
const db = firebase.firestore();

export async function getTemplate(templateName) {
  var docRef = db.collection("templates").doc(templateName);
  const doc = await docRef.get();

  if (!doc.exists) {
    throw new Error(`Template "templateName" not found`);
  }

  return doc.data();
}
