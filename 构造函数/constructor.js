// 例如现在我们有一个猫对象,他有名字和颜色两个属性
function cat(name,color){
  this.name  = name;
  this.color = color;
}
// 通过使用new实例化一个构造函数
var cat1 = new cat('edison','white');
var cat2 = new cat('krystal','pink');
console.log(cat1.name,cat1.color);
console.log(cat2.name,cat2.color);
// 正如readme文件里面所说的，实例化后的对象含有constructor属性，然后最终他们的指向都会指向cat这个构造函数
console.log(cat1.constructor);
console.log(cat2.constructor);
// 然后通过instanceof来监测实例化后的对象是否函数构造函数的prototype属性
console.log(cat1 instanceof cat);
console.log(cat1 instanceof cat);

// 通过prototype公用一些公共属性
// 首先我先做一个浪费内存的例子
function dog(name,color){
    this.name  = name;
    this.color = color;
    this.eat   = function(){
      console.log('吃狗粮');
    }
}
var dog1 = new dog('edison','white');
var dog2 = new dog('krystal','pink');
console.log(dog1.eat===dog2.eat,'----');
// 正确的做法是通过prototype为该构造函数添加公共属性
dog.prototype.type = '狗';
var dog_son = new dog('joe','red');
console.log(dog_son.type);
// 判断dog_son 中的name和type 来自哪里
console.log(dog_son.hasOwnProperty('name'));//如果是true说明是本地属性
console.log(dog_son.hasOwnProperty('type'));//如果是false说明该属性是通过prototype继承的


// 判断某个实例化后的对象中是否含有某个属性
console.log('name' in dog_son);
console.log('color' in dog_son);
console.log('type' in dog_son);
console.log('play' in dog_son);//false
