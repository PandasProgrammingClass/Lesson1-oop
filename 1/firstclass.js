function setup()
{
    // gets the readline module
    var readline = require('readline');

    //setup readline function to take in user input and out put to console
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
}



rl.question(" ", function(answer) {
    // TODO: Log the answer in a database
    console.log("Thank you for your valuable feedback:", answer);

    rl.close();
});
