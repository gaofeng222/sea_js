define(function (require,exports,module) {
    function sayWorld(){
        $('#hello').click(function(){
            $(this).html("Hello world!2222")
        })
    }
    exports.sayWorld = sayWorld;
});