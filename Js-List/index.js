var heading = "Student Data"
let students =[{
    "id":1,
    "name" : "Ahmed Khan",
    "batch" : "2301F",
    "sem":"CPISM",
    "skill" :'Html'
},{
    "id":2,
    "name" : "Farhan Khan",
    "batch" : "2301F",
    "sem":"CPISM",
    "skill" :'Html'
},{
    "id":3,
    "name" : "Rehan Khan",
    "batch" : "2301F",
    "sem":"CPISM",
    "skill" :'Html'
},{
    "id":4,
    "name" : "Irfan Khan",
    "batch" : "2301F",
    "sem":"CPISM",
    "skill" :'Html'
}]
students.forEach((item)=>{
    //  console.log(`${item.id}`)
     console.log(`${item.id}    =>  ${item.name}    =>  ${item.batch} => ${item.sem}`);
});
let newArray = students.map((item)=>{
    //  console.log(`${item.id}`)
    return `${item.id}    =>  ${item.name}    =>  ${item.batch} => ${item.sem}`;
});

console.log(newArray)









// let root = document.getElementById("root");
// root.innerHTML = `<h1>${heading}</h1>`;
// root.innerHTML +=`<table>
// <tr>
//     <th>ID</th>
//     <th>Name</th>
//     <th>Batch</th>
// </tr>`
// students.forEach((item)=>{
//   //  console.log(`${item.id}`)
//     root.innerHTML +=`<tr>
//     <td>${item.id}</td>
//     <td>${item.name}</td>
//     <td>${item.batch}</td>
// </tr>`;
//     });
