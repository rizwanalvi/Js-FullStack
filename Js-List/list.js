console.log("ok1");
var name ="Apple";
console.log(name);
let student=["Ahmed ","Noman","Farhan"]
console.log(student);
let stdobj = {"id":1,"name":"Noman","batch":"2301F"};
console.log(stdobj);

let students =[
    {"id":1,
    "name":"Noman",
    "batch":"2301F"
    },
    {"id":2,
    "name":"Farhan",
    "batch":"2301F"
    },
    {"id":3,
    "name":"Rehan",
    "batch":"2301F"
    }

]

students.forEach((item)=>{
        console.log(item.name)

});

let ids = students.map((item)=>{
    return item.id

});
console.log(ids)
