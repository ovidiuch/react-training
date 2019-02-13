import * as firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  projectId: "react-training-4c1ef"
});
const db = firebase.firestore();

export async function getTemplate() {
  var docRef = db
    .collection("templates")
    .doc(process.env.REACT_APP_TEMPLATE_ID);
  const doc = await docRef.get();

  if (!doc.exists) {
    throw new Error(`Template "templateName" not found`);
  }

  return doc.data();
}

export async function submitAnswers(answers) {
  await db.collection("responses").add({
    templateId: process.env.REACT_APP_TEMPLATE_ID,
    createdAt: new Date(),
    answers
  });
}
