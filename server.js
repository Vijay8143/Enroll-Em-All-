const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// In-memory storage for applications
let applications = [];

// Routes
app.get('/admission', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/submit-application', (req, res) => {
    const { fullName, email, phone, course } = req.body;
    
    // Validate required fields
    if (!fullName || !email || !course) {
        return res.status(400).send('Please fill all required fields');
    }

    // Store application
    applications.push({
        fullName,
        email,
        phone,
        course,
        timestamp: new Date()
    });

    // Send confirmation
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Application Submitted</title>
            <link rel="stylesheet" href="/style.css">
        </head>
        <body>
            <div class="container">
                <h1>Thank you, ${fullName}!</h1>
                <p>You've successfully applied for the <strong>${course}</strong> program.</p>
                <p>We'll contact you at ${email} shortly.</p>
                <a href="/admission">Back to Application Form</a>
            </div>
        </body>
        </html>
    `);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});