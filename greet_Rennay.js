const greet = require('./greet');

const chalk = require('chalk'); 

const figlet = require('figlet')

const message = greet("Rennay")

figlet(message,  function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    const styledMessage = chalk.bgCyanBright.black(data)
    console.log(styledMessage);
});



//console.log(styledMessage)
    