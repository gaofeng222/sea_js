define(function(require,exports,module){
    function range(val,max,min){
        if(val > max){
            val = max;
        }else if(val < min){
            val = min
        }else{
            return val;
        }
    }
    exports.range = range
})