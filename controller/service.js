const auth = require('../model/admin');
const chat = require('../model/chat');

const signup = async (req, res) => {
    try {
        const user = await auth.createUser({
          email: req.body.email,
          password: req.body.password,
        });
        res.json({ message: 'user signed up successfully', user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const signin = async (req, res) => {
    try {
        const user = await auth.signInWithEmailAndPassword(
          req.body.email,
          req.body.password
        );
        res.json({ message: 'user signed in successfully', user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const sendTxt = (req, res) => {
    const { sender, text } = req.body;
    chat.sendMsg(sender, text);
    res.status(201).json({ message: 'message sent!' });
}

const readTxt = (req, res) => {
    chat.readMsg((message) => {
        res.json(message);
    });
}

module.exports = { signup, signin, sendTxt, readTxt };