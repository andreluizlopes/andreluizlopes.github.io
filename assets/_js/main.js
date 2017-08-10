(function() {

    var step = 2 * Math.PI / 20;
    var h = 500;
    var k = 500;
    var r = 500;
    var theta = 0;
    var circle = document.querySelectorAll('.circle');

    function go() {
        var x = h + r * Math.cos(theta);
        var y = k - r * Math.sin(theta);
        theta += step;

        Array.prototype.forEach.call(circle, function(el, i) {
            el.style.top = x + 'px';
            el.style.left = y + 'px';
        });
        setTimeout(go, 400);
    }

   // go();



}());
