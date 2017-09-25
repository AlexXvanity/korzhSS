'use strict';

let server = require('./server.js'),
    router = require('./router.js'),
    requestHandlers = require('./requestHandlers');

let handle = {};
handle['/'] = requestHandlers.start;
handle['/time'] = requestHandlers.getTime;
handle['/date'] = requestHandlers.getDate;
handle['static'] = requestHandlers.uploadStatic;
// handle['/index.html'] = requestHandlers.getIndex;
server.start(router.route, handle);