const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const userModel = require('./models/queries');
const reviewModel = require('./models/reviews');
const connection = require('./config/connection');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
})


app.get('/Home', (req, res) => {
    res.redirect('/');
})


app.get('/Testimonials', async (req, res) => {
    try {
        const reviews = await reviewModel.find({});
        res.render('Testimonials', { reviews }); // Pass the array directly
    } catch (error) {
        console.error('Error fetching reviews:', error);
        res.status(500).send('An error occurred while fetching testimonials.');
    }
});


app.post('/submit-review', async (req, res) => {
    const { name, review } = req.body;
    try {
        await reviewModel.create({ name, review });
        res.render("thanksreview", { name }); // Show a thank-you message
    } catch (error) {
        console.error('Error saving review:', error);
        res.status(500).send('An error occurred while submitting your review.');
    }
});

app.get('/contact', (req, res) => {

    res.render('contact');
})


app.get('/services', (req, res) => {
    res.render('services');
})


app.get('/about', (req, res) => {
    res.render('about');
})

app.post("/submitDb", async (req, res) => {
    const { name, email, phone, country } = req.body;
    const query = await userModel.create({
        name,
        email,
        phone,
        country: country
    });
    res.render('thanksdata');
})


app.listen(3000);