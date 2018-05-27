//A开发
define('./main.js',['./module6.js','./module7.js'],function(require,exports,module){
    
    var oInput = document.getElementById('btn');
    var oDiv1 = document.getElementById('div1');
    var oDiv2 = document.getElementById('div2');
    var oDiv3 = document.getElementById('div3');
    require('./module6.js').drag(oDiv3);
    oInput.onclick = function(){
        oDiv1.style.display = 'block';
        require('./module7.js').scale(oDiv1,oDiv2)
    }
})
//B开发
define('./module6.js',['./range.js'],function(require,exports,module){
    function drag(obj){
          var disX = 0;
          var disY = 0;
          obj.onmousedown = function(ev){
            var ev = ev || window.event;
            disX = ev.clientX - obj.offsetLeft;
            disY = ev.clientY - obj.offsetTop;
            document.onmousemove = function(ev){
                var ev = ev || window.event;
                var L = ev.clientX - disX;
                var T = ev.clientY - disY
                L = require('./range.js').range(L,document.documentElement.clientWidth-obj.offsetWidth,0)
                T = require('./range.js').range(T,document.documentElement.clientHeight-obj.offsetHeight,0)
                obj.style.left = L + 'px';
                obj.style.top = T + 'px';
            }
            document.onmouseup = function(){
                document.onmousedown = null;
                document.onmousemove = null;
            }

          }
          return false; 
    }
    exports.drag = drag;
})
//C开发

define('./module7.js',['./range.js'],function(require,exports,moduel){
    function scale(obj1,obj2){
        var downX = 0;
        var downY = 0;
        var downW = 0;
        var downH = 0;
        obj2.onmousedown = function(ev){
            var ev = ev || window.event;
            downX = ev.clientX;
            downY = ev.clientY;
            downW = obj1.offsetWidth;
            downH = obj1.offsetHeight;
            document.onmousemove = function(ev){
                var ev = ev||window.event;
                var W = ev.clientX-downX + downW ;
                var H = ev.clientY-downY + downH

                W = require('./range.js').range(W,500,100)
                H = require('./range.js').range(H,500,100)

                obj1.style.width =  W +  'px';
                obj1.style.height = H +'px';
            }
            document.onmouseup = function(){
                document.onmousedown = null;
                document.onmousemove = null;

            }
            return false;
        }

    }

    exports.scale = scale;
})
define('./range.js',[],function(require,exports,module){
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