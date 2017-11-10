// 规则一： （默认指向全局变量）
// function fn() {
//     console.log( this.a );
// }
// var a = 2;
// fn();


// 规则二：（隐式绑定）
// function fn() {
//     console.log( this.a );
// }
// var obj = {
//     a: 2,
//     fn: fn
// };
// obj.fn()


// （多个层叠的对象，上下文取最后一个）
// function fn() {
//     console.log( this.a );
// }
// var obj2 = {
//     a: 42,
//     fn: fn
// };
// var obj1 = {
//     a: 2,
//     obj2: obj2
// };
// obj1.obj2.fn();


// 全局绑定和隐式绑定一起使用，默认使用全局绑定
// function fn() {
//      console.log( this.a );
//  }
//  var obj = {
//      a: 2,
//      fn: fn
//  };
//  var bar = obj.fn; // 函数引用传递
//  var a = "全局"; // 定义全局变量
//  bar();


// 规则三：（显示绑定）
// a:使用bind
// b:使用apply
// c:使用call
var m = {
    "x" : 1
};
function foo(y) {
    console.log(this.x + y);
}
var x = 1;
foo.apply(null, [5]);
foo.call(m, 5);
var foo1 = foo.bind(m, 5);
foo1();
// 再次去梳理一下这些方法的使用：foo应用对象m,foo里面的this就指向m
