//- Create another promisified function that sorts this employee list from above response by name. Chain it to above promise
//Create a function that returns array of employees from a random time from 1 to 2 seconds using promise chaining.

function random(){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
         resolve("sucessfully fetching data...")
     },1000)
    })
}
function sort(employee){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          console.log(employee.sort())
        },2000)
    })
}
let employee = ["sam","jack","Harry","Sachin","Rohit"]

random(employee).then(()=>{
    console.log(employee)
    console.log("sorting data ")
    sort(employee).then(()=>{
        console.log("done")
    })    
})
