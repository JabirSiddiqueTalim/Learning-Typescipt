// keyOfConstraint.ts
type User=
{
  id:number;
  name:string;
  review:string;
  result:string;
  address:string;
}


const user:User=
{
  id:12,
  name:"Jst",
  review:"good",
  result:"A+",
  address:"ctg",
}

const findTheObject=(obj:User,key:keyof User)=>
{
  return obj[key];

}
const res1=findTheObject(user,"name");
// console.log(res1)
// type CartItem = {
//   name: string;
//   price: number;
//   quantity?: number;
//  };
 
//  const calculateTotal = ({ price, quantity = 1 }: CartItem): number => {
//   return price * quantity;
//  };
 
//  console.log(calculateTotal())
