const admin = require('firebase-admin');
require('dotenv').config();

admin.app().options.databaseURL = process.env.database;

const db = admin.database();
const chatRef = db.ref('chat');

function saveMsg(message) {
    chatRef.push().set(message);
}

function readMsg(callback) {
    chatRef.on('child_added', (snapshot) => {
      const message = snapshot.val();
      callback(message);
    });
}

function sendMsg(sender, text) {
    const message = {
      sender,
      text,
      timestamp: Date.now(),
    };
    saveMsg(message);
}

module.exports = {
    saveMsg,
    readMsg,
    sendMsg,
};