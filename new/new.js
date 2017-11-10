
// 这是上世纪的写法
// function father(name){
//   var temp = {};
//   temp.name = name
//   temp.__proto__=father.prototype;
//   return temp;
// }
// father.prototype.say=function(){console.log('hello son');}
// console.log(father('edison').say);

// 这是js创始人封装的
function father(name){this.name = name;}
father.prototype.say=function(){console.log('hello son');}
var father_say = new father('edison');
console.log(father_say.say);
