let a =[1,2,3,4,5]

// join is Used to convert the array into string :-
let al = a.join("|")
console.log(al)

let re = a.map((element)=>{
    console.log(element)
    return element
})
console.log(re)

let ree = a.forEach((element)=>{
    console.log(element)
})
console.log(ree)

let b = a.slice(-3,-1)
console.log(b)

a.splice(2,0,4,5)
console.log(a)

console.log(a.toString())

delete(a[5])
console.log(a)

let con = a.concat(6,7,8)
console.log(con)

let h = [[1,2,3,4],[6,7,8,9]]

let flatt = h.flat()
console.log(flatt)


console.log(flatt.concat("muthu"))


let Fahath_Muthu = "hero of maamannan"

try{
    console.log(udai)
}
catch(err){
    console.log(err)
}
finally{
    console.log(Fahath_Muthu + " is Mr fahadh")
}


let j = [1,2,3,4]
for(let i in j){
switch(j[i]){
    case 1:
        console.log("This is ONE")
        break;
    case 2:
        console.log("This is TWO")
        break;
    case 3:
        console.log("This is THREE")
        break;
    default:
        console.log("This is default")
}}

