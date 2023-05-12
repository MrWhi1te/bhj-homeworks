let kill = document.getElementById("dead");
let miss = document.getElementById("lost");

const getHole = index => document.getElementById(`hole${index}`);
for(let i=1;i<9;i++){
    getHole(i).onclick = () => {
        if (getHole(i).className.includes("hole_has-mole")) {
            kill.textContent++
        }
        else {
            miss.textContent++
        }
        if(kill.textContent >= 10){
            alert("Вы выиграли");
            kill.textContent = 0;
            miss.textContent = 0;
        }
        if (miss.textContent >= 5) {
            alert("Вы проиграли");
            kill.textContent = 0;
            miss.textContent = 0;
        }
    }
}



