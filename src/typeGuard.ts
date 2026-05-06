type parametertype=string|number;
const Add=(num1:parametertype,num2:parametertype)=>
{
  if(typeof num1 ==="number" && typeof num2 === "number")
     return num1+num2;
  else
  {
    return  num1.toString()+num2.toString();
  }
}
   
Add(2,2);
Add(3,"2");
console.log(Add(3,"5"));

type NormalUser={
  name:string;

}
type AdminUser=
{
  name:string;
  role:"Admin";

}

const getUser=(user :NormalUser|AdminUser)=>
{
  if("role" in user )
  {
    console.log(`${user.name } role is :${user.role}`)
  }else
  {
    console.log(`${user.name } no role`)

  }
  

}
getUser({name:"jst",role:"Admin"})
 

const arr = arr1.filter(item => arr2.includes(item));