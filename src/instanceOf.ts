class Person
{
  id:number;
  name:string;
  constructor(id :number,name:string)
  {
    this.id=id;
    this.name=name;

  }
  getSleep(sleepHour:number)
  {
    console.log(`Person name is ${this.id} sleep ${sleepHour} Hour`);
  }

}
class Student extends Person
{
  result:number;
  constructor(id:number,name:string,result:number)
  {
    super(id,name);
    this.result=result;
  }
  doStudy(studyHour:number)
  {
    console.log(`Student name is ${this.name} , study ${studyHour} hour`)
  }

}
class Teacher extends Person
{
  sub:string;
  constructor(id:number,name:string,sub:string)
  {
    super(id,name);
    this.sub=sub;
  }
  teaching(teachingHour:number)
  {
    console.log(`Teacher name is ${this.name} , teaching ${teachingHour} hour`)
  }

}
const getUserinfo=(user:Person)=>
{
  if(user instanceof Student)
  {
    user.doStudy(4);
  }else if(user instanceof Teacher)
  {
    user.teaching(9);
  }else
  {
    user.getSleep(10);
  }

}

const std1=new Student(12,"Jabir",3);
getUserinfo(std1);