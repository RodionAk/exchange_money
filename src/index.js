

var object = {

};


module.exports = function makeExchange(cost) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let half = 50;
    let quarter=25;
    let dime=10;
    let nickel=5;
    let penny=1;
    
    console.log(`Before to go to half ${cost}`);
    
    if (cost > 10000)
    return Error;
    
    if (cost == 0)
    return object;


    if (cost>=half)
    {
    half = Math.floor(cost / half);
    object["H"]= half;
    
    //console.log(`Now,half is ${half}`);
    
    cost = cost % 50;
    console.log(`Before to go to quarter ${cost}`);
  
    }
    
    
  if(cost>=quarter)
    {
    quarter = Math.floor(cost / quarter);
    object["Q"] = quarter;
    console.log(`Now,quarter is ${quarter} `);
    
    cost=cost%25;
    console.log(`Before to go to dime ${cost}`);
    }
    
    
    if(cost>=dime)
    {
    dime = Math.floor(cost / dime);
    object["D"] = dime;
    console.log(`Now,dime is ${dime} `);
    
    cost=cost%10;
    console.log(`Before to go to nickel ${cost}`);
    }
    
    if(cost>=nickel)
    {
    nickel = Math.floor(cost / nickel);
    object["N"] = nickel;
    console.log(`Now,dime is ${nickel} `);
    
    cost=cost%5;
    console.log(`Before to go to nickel ${cost}`);
    }
    
    if(cost>=penny)
    {
    penny = Math.floor(cost / penny);
    object["P"] = penny;
    console.log(`Now,penny is ${penny} `);
    
    }

}
