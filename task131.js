//Create a function that returns array of employees from a random time from 1 to 2 seconds using promise chaining.

  function random(){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
         resolve("sucessfully fetching data...")
     },1000)
    })
}
let employee1 = [
    {name :"vivek"},
    {age :" 25"},
    {address: "indore"}
]
let employee2 = [
    {name :"ram"},
    {age :" 27"},
    {address: "dewas"}
]
console.log("fetching data 1")
random(employee1).then(()=>{
    console.log(employee1)
    console.log("fetching data 2")
    random(employee2).then((res)=>{
        console.log(employee2)
        console.log(res)
   })
})

