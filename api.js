// // // fetching using .then and . catch method :--

// // fetch(`txt.txt`).then((res)=>{console.log(res); return res.text()})
// // .then((data)=>{console.log(data)})
// // .catch((rej)=>{console.log(rej)})
// // .finally(()=>{console.log("successfuly completed")})

// //--------------------------------------------------------------------

// // // fetching using async and await method :--

// // async function muthu(){
// //     const res = await fetch(`txt.txt`);
// //     const data = await res.text();
// //     console.log(data)
// // }
// // muthu().catch((rej)=>{console.log(rej)}) 


// //--------------------------------------------------------------------

// // fetch(`json.json`).then((res)=>{console.log(res); return res.json()})
// // .then((data)=>{console.log(data)})
// // .catch((rej)=>{console.log(rej)})
// // .finally(()=>{console.log("finished")})

// //--------------------------------------------------------------------


// // async function muthu(){
// //     const res = await fetch(`json.json`);
// //     console.log(res)
// //     const data = await res.json();
// //     console.log(data)
// // }
// // muthu().catch((rej)=>{console.log(rej)})
// // .finally(()=>{console.log("finished")})

// //--------------------------------------------------------------------

// // fetch('muthu.jpg').then((res)=>{return res.blob()})
// // .then((data)=>{console.log(data); document.getElementById("image").src=URL.createObjectURL(data)})
// // .catch((rej)=>{console.log(rej)})

// //--------------------------------------------------------------------

// // async function muthu(){
// //     const res = await fetch(`muthu.jpg`);
// //     console.log(res)
// //     const data = await res.blob();
// //     console.log(data)
// //     document.getElementById("image").src=URL.createObjectURL(data);
// // }
// // muthu().catch((rej)=>{console.log(rej)})
// // .finally(()=>{console.log("success")})


// //--------------------------------------------------------------------


// // data fetching through api :-

// const url = `https://pokeapi.co/api/v2/pokemon/`;
// const Data =async ()=>{
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data)
//     return data
// }

// const displayUser = async ()=>{
//     const payload = await Data();

//     let dataDisplay = payload.map((object)=>{

//         // const {id,title} = object;

//         return `
//          <div>
//          <table border="2px">
//          <tr>
//          <img style="height:70%; max-width:"300px"; width:100%" src="${pokemon.sprites.other.dream_world.front_default }" alt="${pokemon.name}" />
//          </tr>
//          </table>
//          </div>
//         `
//     })
//     document.getElementById("data").innerHTML=dataDisplay;

// }
// displayUser()


