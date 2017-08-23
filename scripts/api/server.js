'use strict';

module = {};

const Hapi     = require('hapi');

const HOMOLOGATION_ENVIRONMENT = 1;
const PRODUCTION_ENVIRONMENT   = 2;


const connections = require('../config/environment.js');

const Utilities   = require('../src/util/util.js');
var   jwt         = require('../config/jwt.js');

var envMode    = HOMOLOGATION_ENVIRONMENT; 
var connection = connections[envMode];

var server   = new Hapi.Server();

server.connection(connection);

// --- Services
server.register(require('hapi-auth-jwt'), (err) => {
    if (err) throw err;
    server.auth.strategy('jwt', 'jwt', {
        key: jwt.auth,
        verifyOptions: { 
            algorithms: ['HS256'] 
        }
    });
});
server.register({
    register: require('hapi-router'),
    options: {
        routes: 'scripts/config/routes/*.js' // uses glob to include route files
    }
},function (err) {
    if (err) throw err;
    server.start(function() {
        console.log(`Server started at ${server.info.uri}`);
    });
});





