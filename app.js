const express = require('express');
const app = express();
const cors = require('cors');



// import routes
const productRoute = require('./routes/product.route');


// middlewares
app.use(cors());
app.use(express.json());


// use route
app.use('/api/v1/product', productRoute)




// testing server route
app.get('/', (req, res) => {
    res.json("YAY! Server is Runnig on.")
});

app.all('*', (req, res) => {
    res.json("No routee Found!!")
})


module.exports = app;