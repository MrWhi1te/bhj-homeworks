let t = document.getElementById("timer").innerHTML;
let h = 0;
let m = 0;
let s = 0;
function timer(){
    h = Math.floor(t/3600).toString().padStart(2, '0');
    m = Math.floor(t%3600/60).toString().padStart(2, '0');
    s = Math.floor(t%3600%60).toString().padStart(2, '0');
    document.getElementById("timer").innerHTML = h+":"+m+":"+s;
    if(t<=0){
        alert("Вы победили в конкурсе!");
        clearTimeout(timerId);
    }
    else{t--;}
    let timerId = setTimeout(timer, 1000);
}
timer();