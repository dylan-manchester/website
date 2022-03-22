var doc = document.documentElement;
var header = document.getElementById('header')
var w = window;

var curScroll = w.scrollY || doc.scrollTop;
var prevScroll = w.scrollY || doc.scrollTop;
var curDirection = 0;
var prevDirection =0;

var checkScroll = function() {
    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
        curDirection = 2
    }
    else{
        curDirection = 1
    }

    if (curDirection !== prevDirection) {
        if (curDirection===2) {
            header.classList.add('hide');
        }
        else {
            header.classList.remove('hide');
        }
    } 
    prevDirection = curDirection
    prevScroll = curScroll
}

w.addEventListener('scroll', checkScroll)