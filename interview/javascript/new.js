
// Primitive/Primary Datatypes
var a = 10.123456
let b = "abc"
const c = true
console.log(a,b,c);
console.log(typeof(a),typeof(b),typeof(c));
a = "abc"
b = 21.21
console.log(a,b,c);
console.log(typeof(a),typeof(b),typeof(c));
// c = false
//secondary types
array = [1,6,"abc",true,[12,13]]
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array);
// Objects
// 1st type of object declaration
object1 = {
    "firstname":"St. Joseph",
    "lastname" :"Instute of Technology",
    "depts":["CSE","IT","AD","ECE"],
    "training": "MERN"
}
console.log(object1)
console.log(object1.depts)
console.log(object1['training'])
// 2nd type of object declaration
object2 = {}
object2["firstname"] = "Hello"
object2["lastname"] = 'SJIT'
object2["training"] = ["Git","HTML","CSS","JS",'MERN',"React","Express","MongoDB","Hosting"]
console.log(object2);
// 3rd way of Object Declaration
object3 = new Object()
console.log(object3);
object3.training = "MERN"
object3.Depts = ["CSE","IT","AD","ECE"]
console.log(object3.Depts);
// Set
set = new Set()
console.log(set);
set.add("Hello")
console.log(set);
set.add("Hello")
console.log(set);
console.log(typeof(set));*/

// Logical operator
console.log("Logical AND operator");
console.log(5 && 10);
console.log(true && 10);
console.log(false && 10);
console.log(false && true);
console.log(true && false);
console.log("Logical OR operator");
console.log(5 || 10); //15
console.log(true || 10); //15
console.log(false || 10); //10
console.log(false || true); // true
console.log(true || false); // true
//relational Operator

a = '5'
b = 5
console.log("This is == operator",a == b);
console.log("This is === operator",a === b);
a = '4'
b = 5
console.log("This is != operator",a != b);
console.log("This is !== operator",a !== b);

a = 70
b = 35
console.log(a&b);
console.log(a^b);
c = 1
console.log(~c);