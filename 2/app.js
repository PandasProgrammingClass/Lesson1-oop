function beer( name, percentAlcohol ) 
{
    this.name = name;
    this.percentAlcohol = percentAlcohol;
    this.amount = 60;
}

beer.prototype.drink = function()
{
    this.amount = this.amount - 1;
}


//pull in the readline module
var readline = require('readline');

//setup the interface for reading the line 
var rl = readline.createInterface({
    input: process.stdin,                   //the typing by the user
    output: process.stdout                  //output to the console
});

var myBeer;

function makeBeer()
{
    //ask the question and do something with the input
    rl.question("What do you want to name the beer? ", function(answer) 
    {
        //create a new beer
        myBeer = new beer (answer, Math.random() * 20);

        console.log( myBeer );
        whatToDo();
    });
}

/*
    Ask the user what they want to do
*/
function whatToDo()
{
    //ask what the user wants to do 
    rl.question("What do you want to do? ", function(answer) 
    {
        //close the program
        if( answer === 'close' )
        {
            rl.close();
            return;
        }
        if( answer === 'makebeer' )
        {
            makeBeer();
        }

        whatToDo();
    });
}

whatToDo();
