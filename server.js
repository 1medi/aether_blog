const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = 3019;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname)));

const dbUsername = "congling00369";
const dbPassword = "2BoHYjX1Y13epG0V";
const mongoURI = `mongodb+srv://congling00369:2BoHYjX1Y13epG0V@aetherblog.0kzn2.mongodb.net/?retryWrites=true&w=majority&appName=aetherblog`;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    comments: { type: String, required: true },
});

const Contact = mongoose.model('Contact', contactSchema);

app.post('/submit-contact', async (req, res) => {
    try {
        const { name, email, phone, comments } = req.body;

        const newContact = new Contact({ name, email, phone, comments });
        await newContact.save();

        console.log('Form Data Saved:', { name, email, phone, comments });
        res.status(200).send('Form submitted successfully!');
    } catch (err) {
        console.error('Error saving form data:', err);
        res.status(500).send('An error occurred while submitting the form.');
    }
});

app.get('/test', (req, res) => {
    res.send('Server is running and MongoDB is connected!');
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
