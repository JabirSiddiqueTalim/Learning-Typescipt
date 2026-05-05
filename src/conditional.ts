type a= null;
type b=undefined;
type c = a extends number?true:b extends undefined ? true :false;

type obj=
{
   name :string;
   age:number;
   rlt :string;

}
type richPUblic<T>=T extends keyof obj ? true :false;
type ans =richPUblic<"rlt">
