// javascript 赌王儿子财产继承问题
// 方法一
// function father(){
//   this.money = '13个亿'
// }
// function son(fortune){
//   father.apply(this,arguments);
//   this.fortune = fortune;
// }
// var son_inhetirance = new son('全自动凤凰牌单车');
// console.log(son_inhetirance.money);


// 方法二
// function father(){
//   this.money = '13个亿'
// }
// function son(fortune){
//   this.fortune = fortune;
// }
// son.prototype = new father();//抛弃过去的全自动凤凰牌单车
// // console.log(son.prototype.constructor);//如果没有上面一行的话，应该输出自构造函数本身
// son.prototype.constructor = son;//这里的constructor实际上是指向父构造实例的，
// var son_inhetirance = new son('全自动凤凰牌单车');
// console.log(son_inhetirance.money);




// 方法三
// function father(){}
// function son(fortune){this.fortune = fortune}
// father.prototype.money = '13个亿';
// son.prototype = father.prototype; //每次将构造函数的原型对象赋值之后，下一步就需要重新赋值该构造函数的原型对象的constructor
// son.prototype.constructor = son;
// var son_inhetirance = new son('全自动凤凰牌单车');
// console.log(son_inhetirance.money);


// 方法四(待定)
function father(){}
father.prototype.money='13个亿'
function son(fortune){
  this.fortune = fortune;
}
var agency = function(){}
agency.prototype = father.prototype;
// agency.prototype.constructor = agency;
son.prototype = new agency();
// console.log(son.prototype);
son.prototype.constructor = son;
var son_inhetirance = new son('全自动凤凰牌单车');
console.log(son_inhetirance);



// 方法五
// function father(){}
// father.prototype.money = "13个亿";
// function son(fortune){this.fortune=fortune;}
// function extend(Child, Parent) {
// 　　　　var p = Parent.prototype;
// 　　　　var c = Child.prototype;
// 　　　　for (var i in p) {
// 　　　　　　c[i] = p[i];
// 　　　　}
// 　　}
//     extend(son, father);
// 　　var son_inhetirance = new son("全自动凤凰牌单车");
// 　　console.log(son_inhetirance.money); // 动物
