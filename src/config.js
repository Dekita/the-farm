// initialize .env
require('dotenv').config();

// Export config
module.exports = {
    dev_mode: process.env.NODE_ENV === 'development',
    prod_mode: process.env.NODE_ENV === 'production',
    // port for express server
    express_port: process.env.EXPRESS_PORT,
    // log format for morgan 
    morgan_format: "[:date][:remote-addr][:method :status - :response-time ms :url]",    
};
