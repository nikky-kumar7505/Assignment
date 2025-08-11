 let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((e)=>{
   if(e.profession == 'developer'){
    console.log(e);
    
   }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((e)=>{
    if(e.profession == 'developer'){
    console.log(e);
    
   }
  })
}

function addData() {
  //Write your code here, just console.log
  let newEmloyee = {id:4, name:"susan", age:"20", profession:"intern"}
  arr.push(newEmloyee)
  arr.forEach((e)=>{
    console.log(e)
  })
}

function removeAdmin() {
  //Write your code here, just console.log
  let removeAdmin = arr.filter((e)=>e.profession !== "admin")
  removeAdmin.forEach((e)=>console.log(e))
}

function concatenateArray() {
  //Write your code here, just console.log
  let MoreEmployees = [
    { id: 8, name: "Nikky", age: "24", profession: "developer" },
    { id: 9, name: "Shivam", age: "30", profession: "developer" },
    { id: 10, name: "Dakahi", age: "77", profession: "developer" },
  ]

  arr = arr.concat(MoreEmployees);
  arr.forEach((e)=>console.log(e))
}