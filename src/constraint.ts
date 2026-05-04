const GenericsFunction=<T extends{id:number}>(value :T)=>
  {
  
    return {...value};
  
  }
  const student={
    id:12,
    name :"jabir",
    age :22,
    level:2,
  }
  const student2={
    id:32,
    address: "ctg",
  }
  const result =GenericsFunction(student2);
  console.log(result);