var btn1 = document.getElementsByClassName("headBtn")[0];
var btn2 = document.getElementsByClassName("headBtn")[1];

btn1.onmouseenter = function(){
    this.style.color = 'rgb(' + 236 + ',' + 80 + ',' + 80 + ')';
}
btn2.onmouseenter = function(){
    this.style.color = 'rgb(' + 236 + ',' + 80 + ',' + 80 + ')';
}

btn1.onmouseleave = function(){
    this.style.color = 'rgb(' + 255 + ',' + 255 + ',' + 255 + ')';
}
btn2.onmouseleave = function(){
    this.style.color = 'rgb(' + 255 + ',' + 255 + ',' + 255 + ')';
}

var facebook = document.getElementsByClassName("facebook")[0];
var instagram = document.getElementsByClassName("instagram")[0];
var gmail = document.getElementsByClassName("gmail")[0];

facebook.onmouseenter = function(){
    this.style.color = 'rgb(' + 66 + ',' + 103 + ',' + 178 + ')';
}
instagram.onmouseenter = function(){
    document.getElementsByClassName('instagram')[0].className = "instagramChange";
}
gmail.onmouseenter = function(){
    this.style.color = 'rgb(' + 178 + ',' + 49 + ',' + 33 + ')';
}

facebook.onmouseleave = function(){
    this.style.color = 'rgb(' + 255 + ',' + 255 + ',' + 255 + ')';
}
instagram.onmouseleave = function(){
    document.getElementsByClassName('instagramChange')[0].className = "instagram";
}
gmail.onmouseleave = function(){
    this.style.color = 'rgb(' + 255 + ',' + 255 + ',' + 255 + ')';
}