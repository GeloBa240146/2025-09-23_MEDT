let cnt = 0;
let myP = document.getElementById('counter');

function incrementCounter () {
    cnt++;
    myP.innerHTML = cnt;
    updateColor();
}

function decrementCounter () {
    cnt--;
    myP.innerHTML = cnt;
    updateColor();
}

function updateColor() {
    if (cnt > 0) {
        myP.style.color = "green";
    } else if (cnt < 0) {
        myP.style.color = "red";
    } else {
        myP.style.color = "white";
    }
}