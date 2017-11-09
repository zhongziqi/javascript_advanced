// 闭包作用：缓存
function  cacheToken(){
    var  obj={};
    return {
        setToken:function(k,v){//设置缓存
            obj[k]=v;
        },
        getToken:function(k){//获取缓存
            return obj[k];
        }
    };
}
var conf = cacheToken();
conf.setToken('token','1234567890');
console.log(conf.getToken(token));
