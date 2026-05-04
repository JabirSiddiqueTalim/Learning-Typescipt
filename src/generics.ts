type Generics<t>=Array<t>

// const array1:Array<string> =["Mr . x ","mr.Y" ,"mr.z"];
const array1:Generics<string> =["Mr . x ","mr.Y" ,"mr.z"];

// const array2:Array<number>=[1,2,3,4,5,6,4,3,2];
const array2:Generics<number>=[1,2,3,4,5,6,4,3,2];

// const array3:Array<boolean>=[true,false,true,true];
const array3:Generics<boolean>=[true,false,true,true];


console.log(array1,array2,array3)
type User={name :string;age :number}

const user:Generics<User>=[
  {
    name:"jas",
    age:12,
  },{
    name:"ttat",
    age:2,
  }

]
console.log(user)