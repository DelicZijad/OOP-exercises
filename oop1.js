'use strict';
/*
Write a class called Point that represents a point in two-dimensional. It should have the following constructor:

constructor(x, y)
It should have the following properties:

x

y
It should have the following methods:

toString()
Returns a string representation of this point, as [x=1, y=2].
*/


const Point=function(x,y){
this.x=x;
this.y=y;
}
Point.prototype.toString=function(){
    return `[x=${this.x},y=${this.y}]`
}



const PointProto={
   toString:function(){
    return `[x=${this.x},y=${this.y}]`
},
init(x,y){
    this.x=x;
    this.y=y;
}
}
//const sample=Object.create(PointProto);
//sample.init(1,2)


class PointClass{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    toString=function(){
    return `[x=${this.x},y=${this.y}]`
}

}
const samplePoint=new PointClass(1,2)
//console.log(samplePoint.toString());

/*
Create a class that takes the following four arguments for a particular football player:

name
age
height
weight
Also, create three functions for the class that returns the following strings:

getAge() returns "name is age age"
getHeight() returns "name is heightcm"
getWeight() returns "name weighs weightkg"
Examples
 p1 = new Player("David Jones", 25, 175, 75)

 p1.getAge() ➞ "David Jones is age 25"
 p1.getHeight() ➞ "David Jones is 175cm"
 p1.getWeight() ➞ "David Jones weighs 75kg"
*/

const Player=function(name,age,height,weight){
    this.name=name;
    this.age=age;
    this.height=height;
    this.weight=weight;
}
Player.prototype.getAge=function(){
    console.log(`${this.name} is ${this.age} years old`);
}
Player.prototype.getHeight=function(){
    console.log(`${this.name} is ${this.height} cms tall `);
}
Player.prototype.getWeight=function(){
    console.log(`${this.name} weighs ${this.weight}kg`);
}
//const p1=new Player('David Jones',25,175,75);
 //p1.getAge()
 // p1.getHeight();
  // p1.getWeight()

  const PlayerProto={
    init(name,age,height,weight){
        this.name=name;
        this.age=age;
        this.height=height;
        this.weight=weight;

    },
    getAge:function(){
    console.log(`${this.name} is ${this.age} years old`);
},
getHeight:function(){
    console.log(`${this.name} is ${this.height} cms tall `);
},
getWeight:function(){
    console.log(`${this.name} weighs ${this.weight}kg`);
}

  }

  //const p1=Object.create(PlayerProto);
  //p1.init('David Jones',25,175,75)
  //p1.getAge();
 //p1.getHeight();
   //p1.getWeight();

   class PlayerClass{
    constructor(name,age,height,weight){
    this.name=name;
    this.age=age;
    this.height=height;
    this.weight=weight;
}
getAge=function(){
    console.log(`${this.name} is ${this.age} years old`);
}
getHeight=function(){
    console.log(`${this.name} is ${this.height} cms tall `);
}
getWeight=function(){
    console.log(`${this.name} weighs ${this.weight}kg`);
}
   }

   //const p1=new PlayerClass('David Jones',25,175,75);
   //p1.getAge();
 //p1.getHeight();
   //p1.getWeight();


   /*
   Create functions for the Calculator class that can do the following:

Add two numbers.
Subtract two numbers.
Multiply two numbers.
Divide two numbers.
   */

const Calculator=function(num1,num2){
    this.num1=num1; 
     this.num2=num2;
}
Calculator.prototype.add=function(){
    console.log(`${this.num1}+${this.num2}=${this.num1+this.num2}`);
}
Calculator.prototype.subtract=function(){
    console.log(`${this.num1}-${this.num2}=${this.num1-this.num2}`);
}
Calculator.prototype.divide=function(){
    console.log(`${this.num1}/${this.num2}=${this.num1/this.num2}`);
}
Calculator.prototype.multiply=function(){
    console.log(`${this.num1}*${this.num2}=${this.num1*this.num2}`);
}
//const calc=new Calculator(10,5);
//calc.add()
//calc.subtract()
//calc.divide()
//calc.multiply()

const CalculatorProto={
    init(num1,num2){
        this.num1=num1; 
     this.num2=num2;
    },
    add:function(){
    console.log(`${this.num1}+${this.num2}=${this.num1+this.num2}`);
},
    subtract:function(){
    console.log(`${this.num1}-${this.num2}=${this.num1-this.num2}`);
},
    divide:function(){
    console.log(`${this.num1}/${this.num2}=${this.num1/this.num2}`);
},
   multiply:function(){
    console.log(`${this.num1}*${this.num2}=${this.num1*this.num2}`);
},
}
//const calc=Object.create(CalculatorProto);
//calc.init(10,5);
//calc.add()
//calc.subtract()
//calc.divide()
//calc.multiply()

class CalculatorClass{
    constructor(num1,num2){
    this.num1=num1; 
     this.num2=num2;
}
add=function(){
    console.log(`${this.num1}+${this.num2}=${this.num1+this.num2}`);
}
subtract=function(){
    console.log(`${this.num1}-${this.num2}=${this.num1-this.num2}`);
}
divide=function(){
    console.log(`${this.num1}/${this.num2}=${this.num1/this.num2}`);
}
multiply=function(){
    console.log(`${this.num1}*${this.num2}=${this.num1*this.num2}`);
}
}
//const calc=new CalculatorClass(10,5);
//calc.add()
//calc.subtract()
//calc.divide()
//calc.multiply()

/*
Given a class for a BasicPlan, write the classes for StandardPlan and PremiumPlan which have class properties of the following:

BasicPlan	StandardPlan	PremiumPlan
✓	✓	✓	canStream
✓	✓	✓	canDownload
✓	✓	✓	hasSD
✓	✓	hasHD
✓	hasUHD
1	2	4	numOfDevices
$8.99	$12.99	$15.99	price

*/

const BasicPlan=function(){
   this.canStream=true;
   this.canDownload=true;
   this.hasSD=true;
   this.hasHD=false;
   this.hasUHD=false;
   this.numOfDevices=1;
}
//const basic=new BasicPlan()

const StandardPlan=function(){
    BasicPlan.call(this);
    this.hasHD=true;
    this.numOfDevices=2;
}
StandardPlan.prototype=Object.create(BasicPlan.prototype)
//const standard=new StandardPlan()


const PremiumPlan=function(){
    StandardPlan.call(this);
    this.hasUHD=true;
    this.numOfDevices=4;
}
PremiumPlan.prototype=Object.create(StandardPlan.prototype)
//const premium=new PremiumPlan();

const BasicPlanProto={
canStream:true,
canDownload:true,
hasSD:true,
hasHD:false,
hasUHD:false,
numOfDevices:1,
    
}
//const basic=Object.create(BasicPlanProto)

const StandardPlanProto=Object.create(BasicPlanProto);
StandardPlanProto.hasHD=true;
StandardPlanProto.numOfDevices=2;
//const standard=Object(StandardPlanProto)
const PremiumPlanProto=Object.create(StandardPlanProto);
PremiumPlanProto.hasUHD=true;
PremiumPlanProto.numOfDevices=4;
//const premium=Object.create(PremiumPlanProto);


class BasicPlanClass{
    constructor(){
        this.canStream=true
this.canDownload=true
this.hasSD=true
this.hasHD=false
this.hasUHD=false
this.numOfDevices=1
    }

}

class StandardPlanClass extends BasicPlanClass{
    constructor(){
        super();
        this.hasHD=true;
        this.numOfDevices=2;
    }
}
//const standard=new StandardPlanClass();

class PremiumPlanClass extends StandardPlanClass{
    constructor(){
        super();
        this.hasUHD=true;
        this.numOfDevices=4;
    }
}
//const premium=new PremiumPlanClass();

/*
Create the instance properties fullname and email in the Employee class. Given a person's first and last names:

Form the fullname by simply joining the first and last name together, separated by a space.
Form the email by joining the first and last name together with a . in between, and follow it with @company.com at the end. Make sure the entire email is in lowercase.
Examples
*/

const Employee=function(fName,lName){
    this.fName=fName;
    this.lName=lName;
this.fullName=`${this.fName} ${this.lName}`
this.email=`${this.fName.toLowerCase()}.${this.lName.toLowerCase()}@company.com`
}

//const emp1=new Employee('Mary','Sue')

const EmployeeProto={
    init(fName,lName){
            this.fName=fName;
    this.lName=lName;
this.fullName=`${this.fName} ${this.lName}`
this.email=`${this.fName.toLowerCase()}.${this.lName.toLowerCase()}@company.com`
    }
}
//const emp=Object.create(EmployeeProto);
//emp.init('Mary','Sue');

class EmployeeClass{
    constructor(fName,lName){
            this.fName=fName;
    this.lName=lName;
    }

    get fullName(){
        return `${this.fName} ${this.lName}`
    }
    get email(){
        return `${this.fName.toLowerCase()}.${this.lName.toLowerCase()}@company.com`
    }
}
const  emp=new EmployeeClass('Mary','Sue');

/*
Create a method in the Person class which returns how another person's age compares. Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following format:

{other person name} is {older than / younger than / the same age as} me.
*/

const Person =function(name,age){
this.myAge=25;
this.name=name;
this.age=age;
}
Person.prototype.compareAge=function(){
    console.log(this.age===this.myAge?`${this.name} is the same age as  me`:this.age>this.myAge?`${this.name} is older than me`:`${this.name} is younger than me`)
}
//const alan=new Person('Alan',23);

const PersonProto={
    init(name,age){
       this.myAge=25;
this.name=name;
this.age=age; 
    },
    compareAge:function(){
    console.log(this.age===this.myAge?`${this.name} is as old as  me`:this.age>this.myAge?`${this.name} is older than me`:`${this.name} is younger than me`)
}
}

//const toby=Object.create(PersonProto);
//toby.init("Toby",27);
//toby.compareAge()

class PersonClass{
    constructor(name,age){
       this.myAge=25;
this.name=name;
this.age=age; 
    };
   compareAge=function(){
    console.log(this.age===this.myAge?`${this.name} is the same age as  me`:this.age>this.myAge?`${this.name} is older than me`:`${this.name} is younger than me`)
} 
}

//const bella=new PersonClass('Bella',25);
//bella.compareAge()

