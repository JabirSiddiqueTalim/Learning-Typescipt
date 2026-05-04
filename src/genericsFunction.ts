// const createArrayWithString = (value: string) => [value];

// const createArrayWithNumber = (value: number) => [value];

// const createArrayWithUserObj = (value: { id: number; name: string }) => {
//   return [value];
// };
const GenericsFunction=<T>(value :T)=>
{

  return {...value};

}
const student={
  name :"jabir",
  age :22,
  level:2,
}
const result =GenericsFunction(student);
console.log(result);