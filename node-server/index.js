var server = require('./server.js'),
    router = require('./router.js'),
    requestHandlers = require('./requestHandlers');

var handle = {};
handle['/'] = requestHandlers.start;
handle['/time'] = requestHandlers.getTime;
handle['/date'] = requestHandlers.getDate;
handle['/index.html'] = requestHandlers.getIndex;

server.start(router.route, handle);