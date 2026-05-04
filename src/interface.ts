type User =
{
  name :string;
  age:number;

}
type Role=
{
  role:"Admin"|"User";
}
type UserwithRole=User & Role;

const user : UserwithRole=
{
  name :"Jabir",
  age:23,
  role:"Admin",
}
console.log(user);
interface Iuser {
   name :string;
   age:number;
}
interface Iuserwithrole extends Iuser{
  role:"adminbhai"|"userbhai"
}
const user2 : Iuserwithrole =
{
  name :"Jabir",
  age:23,
  role:"adminbhai",
}
console.log(user2)