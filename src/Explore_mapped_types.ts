type Area<T>={
  [key in keyof T]:T[key]
}
// T={
//   height:string;
//   width:number;

//  }
// T.height
// T[height]
// const array=
// {
//   id:"ss";
// }
// array['id']
// array.id

const area1 :Area<{height:string;width:number}>={
  height:'50',
  width:23,

}

// const area2:Area<{height:number;width:number}>={
//   height:40,
//   width:23,

// }
