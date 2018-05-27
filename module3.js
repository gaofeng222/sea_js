define(function(require, exports,module) {
    function sayHello(){
        $('#btn').click(function(){
            alert(123)
        })
    }
    exports.sayHello = sayHello;
});
