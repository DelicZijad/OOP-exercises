'use strict';

/*
Write a class called Rectangle that represents a rectangular two-dimensional region. It should have the following constructor:

constructor(x, y, width, height)
Constructs a new rectangle whose top-left corner is specified by the given coordinates and with the given width and height.
It should have the following properties:

x

y

width

height
It should have the following methods:

toString()
Returns a string representation of this rectangle, as [x=1, y=2, width=3, height=4].
*/

const Rectangle=function(x, y, width, height){
this.x=x;
this.y=y;
this.width=width;
this.height=height;
}
Rectangle.prototype.toString=function(){
    console.log(`[x=${this.x},y=${this.y},widht=${this.width},height=${this.height}]`);
}

//const sample=new Rectangle(1,2,3,4)
//sample.toString();

const RectangleProto={
    init(x, y, width, height){
        this.x=x;
this.y=y;
this.width=width;
this.height=height;
    },
   toString(){
    console.log(`[x=${this.x},y=${this.y},widht=${this.width},height=${this.height}]`);
} 

}
//const sample=Object.create(RectangleProto)
//sample.init(1,2,3,4);
//sample.toString()

class RectangleClass{
    constructor(x, y, width, height){
        this.x=x;
this.y=y;
this.width=width;
this.height=height;
    }
    toString(){
    console.log(`[x=${this.x},y=${this.y},widht=${this.width},height=${this.height}]`);
} 
}
//const sample=new RectangleClass(1,2,3,4)
//sample.toString()

/*
Given an int, figure out how many ones, threes and nines you could fit into the number. You must create a class. You will make variables (class.ones, class.threes, class.nines) to do this.

Examples
let n1 = new OnesThreesNines(5)
n1.nines ➞ 0

n1.ones ➞ 5

n1.threes ➞ 1
*/
const OnesThreesNines=function(number){
    this.nines=(number%9)===0?number/9:(number%9)>0&&(number%9)<number?(number-(number%9))/9:0;
    this.threes=(number%3)===0?number/3:(number%3)>0&&(number%3)<number?(number-(number%3))/3:0;
    this.ones=number/1
}

class OnesThreesNinesClass{
    constructor(number){
 this.number=number;

    }
    get nines(){
        return (this.number%9)===0?this.number/9:(this.number%9)>0&&(this.number%9)<this.number?(this.number-(this.number%9))/9:0;
    }
    get threes(){
        return (this.number%3)===0?this.number/3:(this.number%3)>0&&(this.number%3)<this.number?(this.number-(this.number%3))/3:0;
    }
    get ones(){
        return this.number/1
    }

 
}

/*
Write a class called Name and create the following attributes given a first name and last name (as fname and lname):

An attribute called fullname which returns the first and last names.
An attribute called initials which returns the first letters of the first and last name. Put a . between the two letters.
Remember to allow the attributes fname and lname to be accessed individually as well.
*/

const Name=function(fname,lname){
    this.fname=fname[0].toUpperCase()+fname.slice(1).toLowerCase()
    this.lname=lname[0].toUpperCase()+lname.slice(1).toLowerCase()
    this.fullName=`${this.fname} ${this.lname}`
    this.initials=`${this.fname[0]}.${this.lname[0]}`
}

const NameProto={
    init(fname,lname){
          this.fname=fname[0].toUpperCase()+fname.slice(1).toLowerCase()
    this.lname=lname[0].toUpperCase()+lname.slice(1).toLowerCase()
    },
    get fullName(){
        return `${this.fname} ${this.lname}`
    },
    get initials(){
return `${this.fname[0]}.${this.lname[0]}`
    }
}


class NameClass{
  constructor(fname,lname){
          this.fname=fname[0].toUpperCase()+fname.slice(1).toLowerCase()
    this.lname=lname[0].toUpperCase()+lname.slice(1).toLowerCase()
    }
     get fullName(){
        return `${this.fname} ${this.lname}`
    }
    get initials(){
return `${this.fname[0]}.${this.lname[0]}`
    }
}


/*
Create a class named User and create a way to check the number of users (number of instances) that were created, so that the value can be accessed as a class attribute.

Examples
u1 = new User("johnsmith10")
User.userCount ➞ 1

u2 = new User("marysue1989")
User.userCount ➞ 2

u3 = new User("milan_rodrick")
User.userCount ➞ 3
Make sure that the usernames are accessible via the instance attribute username.

u1.username ➞ "johnsmith10"

u2.username ➞ "marysue1989"

u3.username ➞ "milan_rodrick"
*/

class UserClass{
   constructor(username){
     UserClass.count++;
     this.instanceId=UserClass.count
    this.username=username;
  }
     static count = 0;
}


/*
Design Patterns I: JavaScript Classes?!?
JavaScript doesn't really have classes like other languages. They are actually functions behind the scenes. There are several ways to create classes.

Challenge
Create a Book class using a JavaScript function - instantiable.
It should have an author and published property.

Create an Author class using a literal object - singleton.

It should have a name and books property.

Create a Publisher class by using the new constructor and an anonymous function - singleton.

It should have an authors and books property.

Create a Review class using a class declaration - instantiable.

It should have a rating and user property.
Bonus (optional)
Create a Bookstore class using an IIFE - singleton. It should have a books and prices property.

Notes
All classes should begin with Capital letters.
All class properties should have default(initial) values.
*/
/*
const Book=function(author,published) {
    this.author=author;
    this.published=published
}
*/
const Author={
    init(name,books){
       this.name=name;
       this.books=books;
    }
}

const Publisher=new function(){
    this.authors=['name','some','other'];
    this.books=['book','book2','book3']
    this.getAuthors=function(){
        return this.authors
    }
    this.getBooks=function(){
        return this.books
    }
}

class Review{
    constructor(rating=1,user='random'){
        this.rating=rating;
        this.user=user;
    }
}
//const sample1=new Review()
//const sample2=new Review(3,'Alan')

/*
Create a function which takes an array of instances from the class IceCream and returns the sweetness value of the sweetest ice cream.

Sweetness is calculated from the flavor and number of sprinkles. Each sprinkle has a sweetness value of 1, and the sweetness values for the flavors are as follows:

Flavors	Sweetness Value
Plain	0
Vanilla	5
ChocolateChip	5
Strawberry	10

You'll be given instance properties in the order flavor, numSprinkles.
*/

class IceCream {
	constructor(flavor, numSprinkles) {
		this.flavor = flavor
		this.numSprinkles = numSprinkles
        this.table={
            Plain:0,
            Vanilla:5,
            ChocolateChip:5,
            Strawberry:10,
            Chocolate:10
              }
	}
    get sweetness(){
        return this.numSprinkles+this.table[this.flavor]
    }
}

//const ice1 = new IceCream("Chocolate", 13)  ;
//const ice2 = new IceCream("Vanilla", 0)   
//const ice3 = new IceCream("Strawberry", 7) 


/*
Create a Book constructor that has two properties :

Title
Author
and two methods:

A method named getTitle that returns: "Title: " + the instance title.
A method named getAuthor that returns: "Author: " + the instance author.
and instantiate this constructor by creating 3 new books:

Pride and Prejudice - Jane Austen (PP)
Hamlet - William Shakespeare (H)
War and Peace - Leo Tolstoy (WP)
The name of the new object instances PP, H, and WP, respectively.

For instance, if I instantiated the following book using this Book constructor function:

Harry Potter - J.K. Rowling (HP)
I would get the following properties and methods:

Examples
HP.title ➞ "Harry Potter"
HP.author ➞ "J.K. Rowling"
HP.getTitle() ➞ "Title: Harry Potter"
HP.getAuthor() ➞ "Author: J.K. Rowling"
*/
const Book=function(title,author){
this.title=title;
this.author=author;
}
Book.prototype.getAuthor=function(){
    return console.log(`Author: ${this.author}`);
}
Book.prototype.getTitle=function(){
    return console.log(`Title: ${this.title}`);
}
/*
const pp=new Book('Pride and Prejudice','Jane Austen')
pp.getAuthor()
pp.getTitle()
const h=new Book('Hamlet','William Shakespear')
h.getAuthor()
h.getTitle()
const wp=new Book('War and Peace','Leo Tolstoy')
wp.getAuthor()
wp.getTitle()
*/

/*
Shiritori Game
This challenge is an English twist on the Japanese word game Shiritori. The basic premise is to follow two rules:

First character of next word must match last character of previous word.
The word must not have already been said.
Below is an example of a Shiritori game:

["word", "dowry", "yodel", "leader", "righteous", "serpent"]  // valid!

["motive", "beach"]  // invalid! - beach should start with "e"

["hive", "eh", "hive"]  // invalid! - "hive" has already been said
Write a Shiritori class that has two instance properties:

words: an array of words already said.
game_over: a boolean that is true if the game is over.
and two instance methods:

play: a method that takes in a word as an argument and checks if it is valid (the word should follow rules #1 and #2 above).

If it is valid, it adds the word to the words array, and returns the words array.
If it is invalid (either rule is broken), it returns "game over" and sets the game_over boolean to true.
restart: a method that sets the words array to an empty one [] and sets the game_over boolean to false. It should return "game restarted".
*/

class Shiritori{
    constructor(){
        this.words=[];
        this.game_over=false;
    }
    play(word){
            
        if(this.words.includes(word))this.game_over=true
 this.words.push(word)
          if(this.words[this.words.indexOf(word)-1]!==undefined){
        if(this.words[this.words.indexOf(word)-1].slice(-1)!==word[0])this.game_over=true
    }
    return this.game_over?console.log('game over'):console.log(this.words);
    }
    restart(){
        this.words=[]
        this.game_over=false;
        return console.log(this.words);
    }
}

const game=new Shiritori()

//game.play('hello')
//game.play('open')
//game.play('nappy')
//game.play('salmon')->game over
//game.restart()

/*
You have to build a rudimentary architecture that will simulate a system of XP points distribution among two students that solve a series of given challenges on Edabit.

Step 1: Build a class Challenge

The constructor parameters are id and level. The id will be the numerical identifier of the challenge, and level will be a code made of two uppercased letters:

"VE" = "Very Easy"
"EA" = "Easy"
"ME" = "Medium"
"HA" = "Hard"
"VH" = "Very Hard"
"EX" = "Expert"
Step 2: Build a method for class Challenge

The name of the method inside class Challenge is points().

The method must return the amount of points earned solving a challenge, based on the level of the challenge:

VE = 5 XP
EA = 10 XP
ME= 20 XP
HA= 40 XP
VH = 80 XP
EX = 120 XP
Step 3: Build a class User

The constructor parameters are name, xp and log. The name will be, trivially, the username. The xp is the accumulator that stores the XP points earned. The log is a sort of diary of the user: is an array that will store the id of the challenges solved by the user.

Step 4: Build a method for the class User

The name of the method to implement inside the class User is newSolvedChallenge() and as a parameter, it will accept an object of the Challenge class.

The method must increment the xp of the user and store the challenge id into the array log.

Step 5: Declare the instances needed for the tests

Now that everything is ready, you have to set the exercise and declare the instances of the created classes, for sustaining the tests that are made. Start with the users declarations, they are two:

user1 ➞ name = "Madam" | xp = 0 | log = []
user2 ➞ name = "Steve" | xp = 0 | log = []
Now, declare the challenges, they are six:

challenge1 ➞ id = 1 | level = "VE";
challenge2 ➞ id = 2 | level = "EA";
challenge3 ➞ id = 3 | level = "ME";
challenge4 ➞ id = 4 | level = "HA";
challenge5 ➞ id = 5 | level = "VH";
challenge6 ➞ id = 6 | level = "EX";
Finally, you have to declare which are the challenges solved by the users, using the setter that you have implemented before:

Madam solves the following challenges, in the order:

challenge1 , challenge4 , challenge6
Steve solves the,following challenges, in the order:

challenge5 , challenge3, challenge2
Step 6: The testing mechanics

Tests will verify if after calling the properties and methods of the instance created by you, an expected result is returned. So, you don't have to return a result, but just being sure that everything is set according to Instructions.
*/

class Challenge{
    constructor(id,level){
        this.id=id;
        this.level=level;
        this.pointSystem={
            "VE" : 5,
"EA" : 10 ,
"ME": 20, 
"HA": 40 ,
"VH" : 80 ,
"EX" : 120 
        };
    }

    points(){
        return this.pointSystem[this.level]
    }
      
    
}
const challenge1 = new Challenge(1,'VE')
const challenge2 = new Challenge(2,'EA')
const challenge3 = new Challenge(3,'ME')
const challenge4 = new Challenge(4,'HA')
const challenge5 = new Challenge(5,'VH')
const challenge6 = new Challenge(6,'EX')

class User{
    constructor(name){
        this.name=name;
        this.xp=0;
        this.log=[];
    }
    newSolvedChallenge(chall){
 this.xp+=chall.points()
 this.log.push(chall.id)
    }
 
}

const user1=new User('Madam')
const user2=new User('Steve')

user1.newSolvedChallenge(challenge1)
user1.newSolvedChallenge(challenge4)
user1.newSolvedChallenge(challenge6)
/////
user2.newSolvedChallenge(challenge2)
user2.newSolvedChallenge(challenge3)
user2.newSolvedChallenge(challenge5)

