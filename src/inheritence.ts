class student //parent 
{
  id :number;
  name :string;
  address:string;
   constructor(id :number,name :string, address:string)
   {
    this.id=id;
    this.name=name;
    this.address=address;

   }
   sleep(sleepHour:number)
   {
    console.log(`${this.name} ghumai ${sleepHour} ghonta`)
   }
}
class teacher extends student   //child
{
  
  position:string;
   constructor(id :number,name :string, address:string,position:string)
   {
    super(id,name,address)
    
    this.position=position;

   }
   sleep(sleepHour:number)
   {
    console.log(`${this.name} ghumai ${sleepHour} ghonta`)
   }
   teaching(teachingHour:number)
   {
    console.log(`Sir ${this.name} poray ${teachingHour} ghonta daily`)
   }
}
const student1=new student(12,"Jabir","Ctg");
student1.sleep(3);
const teacher1=new teacher(20,"Jamil azad","Dhaka","Top");
teacher1.teaching(5);