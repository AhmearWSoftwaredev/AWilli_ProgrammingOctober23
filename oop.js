 pokemon = {
     types : ['Fire','Water','Grass'],
     names: ['Squirtle', 'Mudkip','Piplup' ]
 };
// const pokemon_name = pokemon.names[2];
// let chosen_announcement = (time,work) => {
//     return new Promise(( resolve,reject ) => { 
//         if (pokemon_name == 'Piplup'){
//             setTimeout(() => {
//                 resolve(work())
//             },time)
//         }
//        else{
//               reject(console.log("fuck off oak isnt in the office"))
//         }
//         });
//     } 

// chosen_announcement(1000, () => console.log(pokemon_name))

// .then(() => {
//    return chosen_announcement(2000, () => console.log("idek"));
// })


// const nonexistingfunc = function () {
//     console.log("I exist now bitch ")
// }

// async function order () {
//     try{
//         await nonexistingfunc()
//     }
//     catch(error){
//         console.log("that function doesnt exist bitch ");
//     }
//     finally{
//         console.log("runs anyway")
//     }
// }

// order()

let trainer_choice = ()=> {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve(console.log("you chose  " +  `${pokemon.names[1]}`))
        },2000)
    }) 

}

async function steps (){
    try{console.log("first")
    console.log("second")
    console.log("going to pull from function finish executing then come back")
    await trainer_choice();
    console.log("running after pokemon choice is taken in")
    console.log("await works by taking into accoount a time component which comes from calling a function that" + "uses a promise which inherently introduces a relationship between time and work ")
    }
    catch(error){
        console.log("error")
    }
    finally{
        setTimeout(() => {console.log("THE END")},2000)
    }
}
steps();

console.log("im running after function call")
console.log("Im also RUNNING after function call")

