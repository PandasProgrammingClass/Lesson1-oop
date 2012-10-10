/*
 *  This is a block comment, The stars aren't necessary but it looks Good And pretty code is all important
 *
 *
 *
 *
 */
 //This is a single line comment and Doesn't have to be explicitly ended;
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
 *  Declaring the whatToDoFunction
 *
 */
var sol1 = new Soldier(),
    sol2 = new Soldier();
//Int 0;
//Doubles 0.0;
//booleans true and false 
//Chars = 't' '5' 
//Strings 'sdfasd' 'sadasfa' 'asfadsfasfsa'
function whatToDo()
{
    rl.question('What do you want to do? ', function( answer )
    {
        if( answer === 'close' || answer === 'exit' )
        {
            console.log('Thank You');
            rl.close();
            return;
        }
        else if( answer.indexOf("shoot") !== -1 )
        {
            sol1.shoot();
        }
        console.log(sol1);
        whatToDo();
    });
}

function Soldier()
{
    this.health = 100;
    this.bullets = 50;
}

Soldier.prototype.shoot = function()
{
    //this is short hand for minus 1
    this.bullets--;
    //and is the same as the below code... kindof more later.
    //this.bullets = this.bullets - 1;
}

whatToDo()    //Calling the whatToDo function
