const express = require('express');
const cors = require('cors');

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//test route
app.get('/', (req, res) => {
    res.send('Server is running!');
});

//in-memory storage (temp)
let subscribers = [];

//API endpoint: POST /api/subscribe
app.post('/api/subscribe', (req, res) => {
    const { email } = req.body;

    //validate
    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    //save the email
    subscribers.push(email);
    console.log('New subscriber:', email);

    //send success response
    res.json({ success:true, message: 'Email received' });
});

//start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

