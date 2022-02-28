
// include config
const config = require('./config');

// setup basic server application
const body_parser = require('body-parser');
const express = require('express');
const app = express();

// enable morgan to logger app activity 
const morgan = require('morgan');
app.use(morgan(config.morgan_format));

// set view engine to ejs templating
app.set('views', __dirname + '/templates');
app.set('view engine', 'ejs');

// set directory for static files 
app.use(express.static(__dirname + '/public'));

// To support json and url encoded bodies
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: true})); 

// fix for favicon route
app.get('/favicon.ico', async(request, response) => {
    response.redirect('/icons/favicon.ico'); 
});

// handler for /helloworld page 
app.get('/helloworld', async(request, response) => {
    response.send('Hello World!');
});

// handle /api and / routes using `routes/parser`
app.use('/api', require('./routes/parser')('api'));
app.use('/', require('./routes/parser')('www'));

// start server listening on port: 
app.listen(config.express_port, async () => {
    const url = `http://localhost:${config.express_port}`;
    console.log(`App running on ${url}`);
});


// variable for shutting down flag. 
let SHUTTING_DOWN = false;

// ensures program shuts down safely
function onShutdownSafely() {
    // if already shutting down then return,
    if (SHUTTING_DOWN) return;
    // set flag to ensure function only runs once. 
    SHUTTING_DOWN = true;
    // do things on application shutdown::

    // now exit..
    process.exit(0);
}

// signals to listen to for shutdown event.
['SIGINT','SIGTERM'].forEach(signal => {
    process.on(signal, onShutdownSafely);
});

// catch all unhandled promise rejections!!
// this helps stop app crashing entirely when something breaks. 
process.on('unhandledRejection', error => {
    console.error(error);
});
