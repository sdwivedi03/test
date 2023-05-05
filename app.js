const express = require('express');
const cors = require('cors');
const routes = require('./routes')
const ApiError = require('./ApiError');

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


app.use('/', routes);

app.use((req,res,next) => {
    console.log('Not found');
    next(new ApiError(404, 'Not found'))
})

app.use((err, req, res) => {
    console.log('Error: ', err);
    res.status(err.status).send({statusCode: err.status, message: err.message});
})

module.exports = routes;

