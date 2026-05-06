type Product={
  id:string;
  name :string;
  price:number;
  stock:number;
  color ? :string;
}
type p1=Pick<Product,"id"|"name"|"price">
type p2=Omit<Product,"stock">
type p3=Required<Product>;
type p4=Partial<Product>;
type p5=Readonly<Product>;
const emptyObj:Record<string,unknown>={};