//  let a = [1,2,3,4,5]
// console.log(a.slice(2,6))
// let d= new Date()
// let c = d.getUTCMonth()
// console.log(c)

// console.log(typeof a)
// // console.log(a instanceof Array);
// // console.log(a.length)
// a.pop()
// console.log(a)
// a.push(11)
// console.log(a)
// a.shift()
// console.log(a)
// a.unshift(1)
// console.log(a)
// let b=a.join(",")

//console.log(typeof b)
// console.log(a)
// delete a[2]
// console.log(a)
// const muthu = [1,2,3,4,345678,98765]
// let b =a.concat(muthu)
// console.log(b)
// const myArr = [[1,2,[1,2,[1,2,3,4,5,6],3],5],[3,[2,3,4,5,6],4],[5,6]];
// let b = myArr.flat();

// console.log(b)
// let sum = 0
// for (let i = 0; i<a.length; i++){
//     if(a[i]%2==0){
//         sum += a[i]
//         console.log(sum)
//     }
// }


// const fr = ["Banana", "Orange", "Apple", "Mango"];

// const re =fr.map((ele,index)=>{
//    return(ele)
// })

// console.log(re)

// let ar = (a,b,c,d)=>{
//     console.log(a,b,c,d)
// }
// ar(1,2,3)

//let a = [1,2,3,4,5,6,7]



// switch(a=20) {
//     case 10:
//       console.log("10")
//     case 20:
//         console.log("20")
//     default:
//         console.log("finished")
//   }

//   switch (new Date().getDay()) {
//     case 0:
//       day = "Sunday";
//       console.log("s")
     
//     case 1:
//       day = "Monday";
//       console.log("m")
    
//     case 2:
//        day = "Tuesday";
//        console.log("t")

//     case 3:
//       day = "Wednesday";
//       console.log("w")
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//   }


// const a = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };
// a["age"]=20
// console.log(a["age"])

// (function () {console.log("Hello!!")})();

// (function(){
//     console.log("hii")
// }())



// let nm = JSON.stringify(person)
// console.log(typeof nm, nm)

// const letters = new Set(["a","b","c"]);
// console.log(typeof letters )
// console.log(letters instanceof Array)

// const arr = {
//     muthu:7,
//     sankar:18,
//     gokul:12
// }

// arr.ganesh=10
// arr["sini"]=3
// console.log(arr)
// for (k in arr){
//      console.log(arr[k])
// }


// function myFunction(a, b,c) {
//     return  (a,b,c);
//   }
  
// let x = myFunction(4, 3);
// console.log(x)

// let ar=()=>{
//     val = 100
// }
// ar()
// console.log(val)



// class car{
//    constructor(model,color){
//       this.model = model;
//       this.color = color;
//       console.log("cons_1")
//    }

//    meth(){
//       console.log("this is the method in car class")
//       console.log(this.model)
//    }
// }

// class car1 extends car{
//    constructor(model,color,mod,col){
//       super(model,color)
//       this.mod = mod;
//       this.col = col;
//       console.log("cons_2")
//    }

//    car1_meth(){
//       console.log(this.model,this.color,this.mod,this.col)
//       console.log("this is the method for car1 ")
//    }

// }


// ob= new car1("ford","mustang","tata","toyota")
// ob.car1_meth()
// ob.meth()



// let inp = Number(prompt("Enter the number here"))
// cond = false
// if(inp<=0 || inp==1){
//     cond = true
// }
//    for(let i=2; i<inp;i++){
//       if(inp%2==0){
//          cond = true
//          break
//       }
//    }
// if(cond){
//    console.log("No")
// }
// else{
//    console.log("Yes")
// }
// for (let i in person ){
//     console.log(i)
// }

// for(let i in person){
//     console.log(person[i])
// }

// let p1={ a:1,b:2,c:3,d:4 } 

// let p2={ a:5,b:6,c:7,d:8 }

// let ob = {}

// for(let i in p1){
//     if(i in ob){
//         ob[i] = ob[i] + p1[i]
//     }else{
//         ob[i]=p1[i]
//     }
// }
// for(let i in p2){
//     if(i in ob){
//         ob[i] = ob[i] + p2[i]
//     }else{
//         ob[i]=p2[i]
//     }
// }

// console.log(ob)


// let ob1 = {
//     muthu : "dhoni", sankar : "koli",sini : "dhoni", viki : "koli" 
// }
// let re = {}

// for(let i in ob1){
//     if(i in re){
//         re[ob1[i]] += Number(1)
//     }else{
//         re[ob1[i]] = Number(1)
//     }
// }
// console.log(re)



// let arr = ["mon","tue","wed","thur","fri","sat","sun","mon","tue","sat"]
// let re = {}
// for (const [key,val] of Object.entries(arr)){
//      if(val in re){
//       re[val] = re[val]+1
//      }else{
//       re[val] = 1
//      }
// }
// console.log(re)





// let x = [
//    { a : 1 , b : "a"},
//    { a : 2 , b : "b"},
//    { a : 3 , b : "c"},
//    { a : 4 , b : "d"}
// ]

// let re = {}
// for(let i = 0 ; i < x.length ; i++){
//    if(i in re){
//       re[x[i].b] = x[i].a
//    }else{
//       re[x[i].b] = x[i].a
//    }

// }
// console.log(re)

// let n = 111
// let cond = false
// if(n<=0 || n==1){
//     cond = true
// }
// for(let i=2;i<n;i++){
//      console.log(i)
//      if(n%i==0){
//       cond = true
//       break
//      }
//    }
// if(cond){
//    console.log("No")
// }else{
//    console.log("yes")
// }
// console.log(n%2)

// let n = 10
// string=""
// for(let i = 0;i<n;i++){
//     for(let j =0;j<n;j++){
//       string += "*"
//     }
//     string += "\n"
// }
// console.log(string)



// let n = 6;
// let string = "";

// for (let i = 1; i <= n; i++) {
//   // printing star
//   for (let j = 0; j < i; j++) {
//     if(i === n) {
//       string += "*";
//     }
//     else {
//       if (j == 0 || j == i - 1) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//   }
//   string += "\n";
// }
// console.log(string);


// let n = 5;
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);


// let arr = ["muthu","sankar","sini","viki","muthu","sankar"]
// let re = 0
// for(let i in arr){
//    re += 1
// }
// console.log(re)


// let ne = {}
// for(let i in arr){
//    if(i in ne){
//       ne[arr[i]] = ne[i]+1
//    }else{
//       ne[arr[i]]= 1
//    }
// }
// console.log(ne)

// let arr = [1,2,111,3,9,2,3,6,8,342]
// max = 0
// mini= 0
// for( let i in arr){
//    if(arr[i]>max){
//       max = arr[i]
//    }
// }
// arr.pop(max)
// for( let i in arr){
//    if(arr[i]>mini){
//       mini = arr[i]
//    }
// }

// console.log(max)
// console.log(mini)

// let a = [[1,2,3,4],[5,6,7,8],[8,9]]

// let b = a.flat()
// console.log(b)

// let a = "muthu"

// for(let i=0;i<a.length;i++ ){
//      if(i%2!=0){
//         console.log(a[i])
//      }
// }



// let a = {
//      "muthu": 1,
//      "sankar":2,
//      "sini":1,
//      "viki":2,
//      "raju":3
// }

// let b = {}

// for(let [keys,values] of Object.entries(a)){

//         if(values in b){
//           b[values].push(a[keys])
//         }else{
//           b[values] = [a[keys]]
//         }
// }
// console.log(b)

// for(let i in a){
//      if(a[i] in b){
//         b[i].append(a[i])
//      }else{
//         b[i]=a[i]
//      }
// }
// console.log(b)



// class a{
//      constructor(a,b,c){
//           this.a=a;
//           this.b=b;
//           this.c=c;
//           console.log("yes")
//      }

//      m1(){
//           console.log(`method one in class 'a' ${this.a+this.b+this.c}`)
//      }
// }

// class b extends a{
//      constructor(a,b,c,d,e,f){
//           super(a,b,c,)
//           this.d=d;
//           this.e=e;
//           this.f=f;
//           console.log("yes yes")
//      }

//      m2(){
//           console.log(`method one in class 'a' ${this.d+this.e+this.f}`)
//      }
// }

// ob1=new b(1,2,3,4,5,6)
// ob1.m1()
// ob1.m2()





// class b{
     
//      constructor(a,b,c,d,e,f){
         
//           this.d=d;
//           this.e=e;
//           this.f=f;
//           console.log("yes yes yes",this.d+this.e+this.f)
//      }
// }

// ob= new b(1,2,3,4,5,6)


// function a(a,b){
//      let s=a+b;
//      return s;
// }


// function b(f){
//      console.log("result",f)
// }


// b(a(5,5))



// function a(callback ,a,b){
//      console.log("function one")
//      callback(a,b)
// }

// function b(a,b){
//      let re=a+b
//      console.log( re)
// }

// a(b,1,2)




// const va = setTimeout(()=>{
//      console.log("async")
// },1000)

// console.log(va)

// const b =setInterval(()=>{
//     console.log("timeinterval")
// },3000)



// promises :-

// let condition = prompt("please type ==>> yes or no")

// let promise = new Promise((setResolve,setReject)=>{
//      if(condition=="yes"){
//           setResolve("The work is completed")
//      }else{
//           setReject("The work is not completed")
//      }
// })


// promise.then((success)=>{console.log(success)})
// .catch((failed)=>{console.log(failed)})
// .finally(()=>{console.log("The process was ended")})


//---------------------------------------------------------------------------



// data fetching  ;-

//const api = `https://jsonplaceholder.typicode.com/posts`


// // data fetching using promises (then) :------
//const a = fetch(api)
// a.then((res)=>res.json()).then((data)=>console.log(data))

// // data fetching using async and await :------
// const a = async ()=>{
//      const res = await fetch(api);
//      const data = await res.json();
//      console.log(data)
// }
// a()



//---------------------------------------------------------------------------




// // call-back function ::::: --------

// const muthu = (()=>{
//     setTimeout(()=>{
//         console.log("Naa aprm thaan print aguven because im a asyncronus")
//     },1000)

// })

// muthu()
// console.log("Naa firste print aautuven i'm a syncronus")



// let con = "no"
// let promise = new Promise((setResolve,setReject)=>{
//     if(con=="yes"){
//         setResolve("resolve")
//     }else{
//         setReject("reject")
//     }
// })
// promise.then((res)=>{console.log(res)})
// .catch((data)=>{console.log(data)})
// .finally(()=>console.log("success"))


// // API fetching :--
//const url = fetch(`https://jsonplaceholder.typicode.com/posts`)

// const api = fetch(url)

// api.then((res)=>res.json())
// .then((data)=>console.log(data))




//---------------------------------------------------------------------------------------------------------------------------------------------------


// let a = Symbol("hello")
// let b = Symbol("hello")

// console.log(a === b)


// var a;
// console.log(a)
// a = 2;


// implicit type of coercion :-
// var a=20;
// var b="20"
// console.log(a+b,typeof (a+b))


// let a = 2
// let b = "2"
// console.log(isNaN(a+b))
// let c = 2
// console.log(a+b+c)   
// console.log(a+c+b)
// console.log(typeof (a == b))

// if(a && b){
//     console.log("works")
// }

  
// (function(){console.log("muthu")})();


// a = 10
// console.log(a)

// function muthu(){
//     a=10
//     console.log(a)
// }
// muthu()
// console.log(a)



// "use strict";
// var a = 10
// console.log(a)


// // high order function :-

// function one(){
//     return function two(){
//         console.log("muthu")
//     }
// }
// let x = one()
// x()


// // currying function :-
// function one(a){
//     return function two(b){
//         console.log(a+b)
//     }
// }
// one(3)(4)





// let api = (`https://jsonplaceholder.typicode.com/posts`)

// const data = async ()=>{
//     const res = await fetch(api)
//     console.log(res)
//     const data = await res.json()
//     console.log(data[0])
//     dis = ''
//     data.forEach(element => {
//         dis += `
//     <table>
//         <tr> 
//            <th>USER Id</th>
//            <th>ID</th>
//            <th>LITLE</th>
//            <th>BODY</th>
//         </tr>
//         <tr>
//             <td>&{element.userId}</td>
//             <td>&{element.id}</td>
//             <td>${element.title}</td>
//             <td>&{element.body}</td>
//         </tr>
//     </table> `
//     });
//     document.getElementById("data").innerHTML = dis;
// }
// data()




// const fun = () =>{
//     setTimeout(()=>{
//         console.log("settimeout")
//     },1000)
// }
// fun()

// const fu = ()=>{
//     setInterval(()=>{
//       console.log("time intervel")
//     },1000)
//     clearInterval()
// }
// fu()

// const s = ()=>{
//     clearInterval()
//     console.log("ended")
// }
// s()

// setInterval(() => {
//     console.log("yes")
// },2000);

// clearInterval()


