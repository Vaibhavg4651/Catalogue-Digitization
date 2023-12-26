import dotenv from "dotenv";
import { region } from "firebase-functions";
import { onRequest } from "firebase-functions/v2/https";
import { initializeApp, credential as _credential } from "firebase-admin";
import { text } from "body-parser";
import serviceAccount from "./admin-production.json";

dotenv.config();

initializeApp({
  credential: _credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL,
  storageBucket: process.env.FIREBASE_BUCKET
});


import { routes as imageRecognition  } from "./routes/imageRecognition";
import { routes as saveCatalogue } from "./routes/saveCatalogue";
import { routes as voiceConversion } from "./routes/voiceConversion";
import { routes as catalogueData } from './routes/getCatalogue';

import express, { json } from "express";
import cors from "cors";
const app = express();

app.use(json());
app.use(cors({ origin: true }));
app.use(text());

app.use("/api/imageRecognition", imageRecognition);
app.use("/api/voiceConversion", voiceConversion);
app.use("/api/saveCatalogue", saveCatalogue);
app.use('/api/getCatalogue', catalogueData)

app.get("/", (req, res) => {
  return res.status(200).send("Welcome to Digital Catalogue");
});

// export const catalogue = region("asia-south1").https.onRequest(app); // use for deploying funtions

exports.catalogue = onRequest(app); // use for local testing