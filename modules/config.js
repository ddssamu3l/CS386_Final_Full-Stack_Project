const host = '127.0.0.1'; //Setting host
const port = 3000; //Setting port
const express = require("express"); //Load express module
const app = express(); //Instantiate express app instance
const appName = 'Prompt-a-Chat'; //Application name

// export all constants
module.exports = {host, port, express, app, appName};