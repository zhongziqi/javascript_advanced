var Person = function () { };
  Person.prototype.Say = function () {
  console.log("Person say");
}
Person.prototype.Salary = 50000;

var Programmer = function () { };
Programmer.prototype = new Person();
Programmer.prototype.WriteCode = function () {
  console.log("programmer writes code");
};

Programmer.prototype.Salary = 500;

var p = new Programmer();
// 1.首先看到这个东西脑海里应该有：p.__proto__ = Programmer.prototype;
// 2.因为上面还有一句：programmer.prototype = new Person;所以有 programmer.prototype = Person.prototype;
// 3.所以根据1，2一连串的关系图就出来了
p.Say();//在p.__proto__找不到，然后去person.prototype里面找
p.WriteCode();//在__proto__ 找到
console.log(p.Salary);//在program.prototype里面就找到了
