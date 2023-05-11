const image = document.getElementById("cookie");
let click = document.getElementById("clicker__counter").textContent;

function clickImg(){
    click++;
    document.getElementById("clicker__counter").textContent = click;
    if(image.width == 200){
        image.width = 150;
        image.height = 150;
    }
    else{
        image.width = 200;
        image.height = 200;
    }
}

image.onclick = clickImg;