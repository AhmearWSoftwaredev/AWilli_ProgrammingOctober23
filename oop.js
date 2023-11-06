//  pokemon = {
//     Regions:['Kanto','Hoenn','Sinnoh'],
//     professors: ['Oak', 'Birch','Rowan'],
//     Rivals: ['Gary','May','Barry'],
//     types : ['Fire','Water','Grass'],
//     names: ['Squirtle', 'Mudkip','Piplup','Charmander','Torchic','Chimchar','Bulbasaur','Treecko','Turtwig']
//  };

// let pulls_pokemon_type = () => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve(console.log("Hello and welcome to the drive thru pokemon center where we expedite your journey."),
//             console.log('You dont get to pick a starter here were in the ' + ` ${pokemon.Regions[1]}`+' region so youll get a'+ ` ${pokemon.types[2]}`+' type today'))
//         },1000)
//     })

// }

// let pulls_pokemon_name = () => {
//     return new Promise((resolve,reject) =>{ 
//     setTimeout(() => {
//         resolve(console.log("Since youre getting a" + ` ${pokemon.types[2]}` ,"type today im gonna hand you this" + ` ${pokemon.names[7]}`))
//     },2000)});
// }


// async function drive_thru_journey(){
//     try{
//         console.log("ugh um...");
//         await pulls_pokemon_type();
//         console.log("do you have a random choice of number between one and three?");
//         console.log("oh so your number is one ?");
//         await pulls_pokemon_name();
//     }
//     catch(error){
//         console.log("it appears we have no more pokemon")
//     }
//     finally{
//         console.log("we always want to thank you for coming regardless of outcome! Be well!")
//     }
// } 

// drive_thru_journey()



function fizzBuzz(n) {
    for(let i=1; i <=n ; i++){
        if(i % 3 ==0 && i % 5 == 0){
            console.log('FizzBuzz')
        }
         else if (i % 3 == 0 && i % 5 !== 0){
             console.log("Fizz")
         }
         else if (i % 5 == 0 && i % 3 !== 0){
             console.log("Buzz")
         }
         else{
             console.log(i)
         }
    }
 
 }

console.log(fizzBuzz(15));