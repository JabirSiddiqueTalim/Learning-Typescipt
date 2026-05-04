interface Developer<T> {
  name :string;
  age:number;
  device :string;
  smartWatch:T
}
interface poorSmartWatch{
  stopTime:number;
  startTime:number;
  brand:string;
}
const poorDeveloper:Developer<poorSmartWatch>={
  name :"Jabir ",
  age:23,
  device :"poco x3",
  smartWatch:{
    stopTime:2,
    startTime:4,
    brand:"No brand",


  }
  
}
interface richSmartWatch{
  
  brand:string;
  price:number;
}
const richDeveloper:Developer<richSmartWatch>={
  name :"Mitab",
  age:23,
  device :"Iphone",
  smartWatch:{

    brand:"Apple",
    price:10000,


  }
  
}
console.log(poorDeveloper,"\n",richDeveloper)
