
var title = document.getElementById("CSTitle");
var timer = 0;
var num = 0;

time1();

function time1() {
    setTimeout(move, 100);
    timer += 0.20;
    setTimeout(time2, 100);
}

function time2() {
    setTimeout(move, 100);
    timer += 0.20;
    setTimeout(time1, 100);
}

function move() {
    num = 10*(Math.sin(timer));
    title.style.top = num + "px";
    if (num > 6.283185) {
        num -= 6.283185;
    }
}
