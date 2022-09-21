function fnClick(){
    var inp = document.getElementsByClassName('inp')[0];
    var btn = document.getElementsByClassName('btn')[0];
    inp.classList.remove('hide');
    btn.classList.add('hide');
}
function weightcalcm(m){
    var inp = document.getElementsByClassName('inp')[0].value;
    
    var weight = +inp * 0.38
    document.getElementsByClassName('res')[0].innerHTML = weight+" kg";
}
function weightcalcv(m){
    var inp = document.getElementsByClassName('inp')[0].value;
    
    var weight = +inp * 	0.91
    document.getElementsByClassName('res2')[0].innerHTML = weight+" kg";
}
function weightcalcm2(m){
    var inp = document.getElementsByClassName('inp')[0].value;
    
    var weight = +inp * 0.38
    document.getElementsByClassName('res3')[0].innerHTML = weight+" kg";
}
function weightcalcj(m){
    var inp = document.getElementsByClassName('inp')[0].value;
    
    var weight = +inp * 2.34
    document.getElementsByClassName('res4')[0].innerHTML = weight+" kg";
}
function weightcalcs(m){
    var inp = document.getElementsByClassName('inp')[0].value;
    
    var weight = +inp * 1.06
    document.getElementsByClassName('res5')[0].innerHTML = weight+" kg";
}
function weightcalcu(m){
    var inp = document.getElementsByClassName('inp')[0].value;
    
    var weight = +inp * 	0.92
    document.getElementsByClassName('res6')[0].innerHTML = weight+" kg";
}
function weightcalcn(m){
    var inp = document.getElementsByClassName('inp')[0].value;
    
    var weight = +inp * 	1.19
    document.getElementsByClassName('res7')[0].innerHTML = weight+" kg";
}
function weightcalcp(m){
    var inp = document.getElementsByClassName('inp')[0].value;
    
    var weight = +inp * 	0.06
    document.getElementsByClassName('res8')[0].innerHTML = weight+" kg";
}
function weightcalcsn(m){
    var inp = document.getElementsByClassName('inp')[0].value;
    
    var weight = +inp * 	27.01
    document.getElementsByClassName('res9')[0].innerHTML = weight+" kg";
}