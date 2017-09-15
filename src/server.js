
require('babel-register')({
  presets: ['env', 'react'],
  plugins: ['transform-object-rest-spread', 'transform-regenerator']
});

require('babel-polyfill');

const port = require('./constants/socket-endpoint-port').default;
const clientReducer = require('./client').rootReducer;

require('./server/bootstrap').start({ clientReducer, port });
