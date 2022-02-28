

const fs = require('fs');
const express = require('express');
const mongo_sanitize = require('mongo-sanitize');


// middleware to sanitize params incase they 
// are potentially saved later in mongodb. 
function sanitizer(req, res, next) {
    mongo_sanitize(req.params);
    mongo_sanitize(req.body);
    next();
}

module.exports = function parser(route) {
    const router = new express.Router();
    router.use(sanitizer);

    // scan files for given route
    const ROUTE_ROOT = `${__dirname}/${route}`;
    const rdirectoryFiles = fs.readdirSync(ROUTE_ROOT);
    const routeFiles = rdirectoryFiles.filter(f => f.endsWith('.js'));
    
    // iterate each file and set defined routes
    for (const file of routeFiles) {
        const route = require(`${ROUTE_ROOT}/${file}`);
        if (route.post) router.post(route.route, route.post);
        if (route.get)  router.get(route.route, route.get);
        console.log('loaded:', `${ROUTE_ROOT}/${route.route}`);
    }   

    // return the router object for app.use();
    return router
};