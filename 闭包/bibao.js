// 闭包作用：缓存
// function  cacheToken(){
//     var  obj={};
//     return {
//         setToken:function(k,v){//设置缓存
//             obj[k]=v;
//         },
//         getToken:function(k){//获取缓存
//             return obj[k];
//         }
//     };
// }
// var conf = cacheToken();
// conf.setToken('token','1234567890');
// console.log(conf.getToken(token));





let c = 3;
console.log('函数外let定义c：' + c);//输出c=3
function change(){
let c = 6;
console.log('函数内let定义c：' + c);//输出c=6
}
change();
console.log('函数调用后let定义c不受函数内部定义影响：' + c);//输出c=3
