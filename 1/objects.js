/*
 *  Soldier object
 */
function soldier( startingHealth )
{
    startingHealth = Math.floor( startingHealth * 100 );
    this.health = startingHealth;      //the health for a soldier
    
    this.bullets = 50; 
}




/*
 *  Shoots a bullet from this soldier
 */
soldier.prototype.shoot = function()
{
    this.bullets = this.bullets - 1;
    
    return this.bullets;
}
