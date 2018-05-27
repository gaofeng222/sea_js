//A开发
define(function(require,exports,module){
    
    var oInput = document.getElementById('btn');
    var oDiv1 = document.getElementById('div1');
    var oDiv2 = document.getElementById('div2');
    var oDiv3 = document.getElementById('div3');
    require('./module6').drag(oDiv3);
    oInput.onclick = function(){
        oDiv1.style.display = 'block';
        require('./module7').scale(oDiv1,oDiv2)
    }
})