//Lets do some math...
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//the numbers to do the math with
var numbers = [];           //create an array or list of things


//the function that starts the program
function run()
{
    //Prompt the user
    rl.question("What do you want to do? ", function( answer )
    {
        if( answer === 'close' || answer === 'exit' )
        {
            rl.close();     //close the stream buffer for input
            return;         //end the function
        }
        else if( answer === 'list' )        //answer is exactly equal to list
            console.log( numbers );
        else if( answer.indexOf('list') === 0 )        //answer begins with list, or has list in it
        {
            var command = answer.split(' ');        //it's an array!!!
            console.log(answer[command[1]] );
        }
        else if( answer === 'arithmetic' )
        {
            var sum = 0,        //equal ot zero because has no affect on sum
                prod = 1;
            for( var i = 0; i < numbers.length; i++)        //iterate through the array
            {
                sum = sum + numbers[i];             //add it to calculate sum
                prod = prod * numbers[i];           //multiply it i get the product
            }
            console.log('Sum: ' + sum );
            console.log('Product: ' + prod );
        }
        else if( !isNaN( answer ) )
            numbers.push( parseInt(answer, 10) );       //adds answer to the end of the list
        else
            console.log('Enter a number to add one');
        run();
    });
}


run();
