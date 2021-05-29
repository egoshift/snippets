import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const app = admin.initializeApp();

exports.addUser = functions.auth.user()
    .onCreate(async (userRecord) => {
      const userDoc = {
        id: userRecord.uid,
        displayName: userRecord.displayName || "Unknown",
        avatarURL: userRecord.photoURL || "",
      };

      return app.firestore().collection("users").doc().set(userDoc);
    });
