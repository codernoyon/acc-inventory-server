const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const colors = require('colors');
const app = require('./app');
const port = process.env.PORT || 8080;




// database connection
mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
    console.log(`Successfully Database Connected!` .blue.bold);
});


// Lestenig port
app.listen(port, () => {
    console.log(`App is running on port ${port}` .yellow.bold);
});