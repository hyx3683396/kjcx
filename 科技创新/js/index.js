window.onscroll = function() {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    if (t >= 350) {
        var jumh1 = document.getElementById('num2');
        jumh1.classList.add("feirul");
    }
    if (t >= 400) {
        var jumh2 = document.getElementById('num1');
        jumh2.classList.add("feirur");
    }
    if (t >= 450) {
        var jumh2 = document.getElementById('num3');
        jumh2.classList.add("feirur");
    }
    if (t >= 2800) {
        var img1 = document.getElementById('img1');
        img1.classList.add("feirur");
    }
    if (t >= 3100) {
        var num4 = document.getElementById('num4');
        num4.classList.add("feirul");
    }
    if (t >= 3500) {
        var img12 = document.getElementById('img2');
        img2.classList.add("feirul");
    }
    if (t >= 3750) {
        var num5 = document.getElementById('num5');
        num5.classList.add("feirur");
    }
}