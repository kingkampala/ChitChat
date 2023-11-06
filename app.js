const express = require('express');
const app = express();
const admin = require('firebase-admin');
require('dotenv').config();

app.use(express.json());

const port = process.env.PORT || 3000;

const serviceAcct = {
  "type": "service_account",
  "project_id": process.env.project_id,
  "private_key_id": process.env.private_key_id,
  "private_key": process.env.private_key,
  "client_email": process.env.client_email,
  "client_id": process.env.client_id,
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-5fk3z%40kampala-49389.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAcct),
  databaseURL: process.env.database
});

const auth = admin.auth();

module.exports = auth;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});