var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//create an array, or list it's blank now
var soldier1,
    soldier2;

//the main game loop
function whatToDo()
{
    if( ( soldier1 && soldier1.health <= 0 ) || (soldier2 && soldier2.health <= 0) )  // || is an or statement
    {
        if( soldier2.health <= 0 )//if the game ended because soldier2 was dead 
        {
            console.log(soldier1.name + ' Has Triumphed over ' + soldier2.name);
            console.log('Winning Stats: ');
            console.log( soldier1 );
        }
        else if( soldier1.health <= 0 )     //if soldier1 is dead
        {
            console.log(soldier2.name + ' Has Triumphed over ' + soldier1.name);
            console.log('Winning Stats: ')
            console.log( soldier2 );
        }
        rl.close();
        return;
    }
    rl.question("What do you want to do? ", function( answer )
    {
        if( answer === "close" )
        {     
            rl.close();
            return;
        }
        if( answer === "create1" )
        {
            //make a new soldier 
            soldier1 = new Soldier( 'soldier1' );
            console.log( soldier1 );            //show the soldier
        }
        if( answer === "create2" )
        {
            soldier2 = new Soldier( 'soldier2' );
            console.log( soldier2 );            //show the soldier
        }
        if( answer === 'status' )
        {
            console.log( soldier1 );
            console.log( soldier2 );
        }
        //fights the first and last soldier
        if( answer === 'fight' )
        {
            soldier1.shoot( soldier2 );
            soldier2.shoot( soldier1 );
            console.log( soldier1 );
            console.log( soldier2 );
        }
        if( answer === 'war' )
        {
            while( !soldier1.isDead() && !soldier2.isDead() )     //While they're both alive 
            {
                if( Math.random() < .5 )
                {
                    soldier2.shoot( soldier1 );
                    if( soldier1.isDead() )         //did soldier2 get killed above?
                        break;
                    soldier1.shoot( soldier2 );
                }
                else
                {
                    soldier1.shoot( soldier2 );
                    if( soldier2.isDead() )         //did soldier1 get killed above?
                        break;
                    soldier2.shoot( soldier1 );
                }
            }
        }
        whatToDo();
    });
}


/*
 * The Soldier object
 */
function Soldier( name )
{
    this.name = name;
    this.health = Math.floor( Math.random() * 100 );
    this.bullets = 100;
}

/*
 *  Shoots a bullet
 */
Soldier.prototype.shoot = function( soldier )
{
    this.bullets--;     //this.bullets = this.bullets - 1;
    if( soldier.hit() )
    {
        console.log( this.name + ' Shot and hit ' + soldier.name );
    }
    else
    {
        console.log( this.name + ' missed ' + soldier.name );
    }
    return this.bullets;        //returns the number of bullets to the function that called this one
}

/*
 *  Takes damage from a potential bullet
 */
Soldier.prototype.hit = function()
{
    if( .5 > Math.random() )
    {
        //decrease health a random amount 
        this.health = this.health - Math.floor( Math.random() * 8 );
        return true;
    }
    return false;
}

/*
 *  Returns a boolean representing whether or not this soldier is dead
 */
Soldier.prototype.isDead = function()
{
    return ( this.health <= 0 );        //return if this guys health is less than or equal to zero
}


//start the App
whatToDo();
