
function display(event) {
    let X = event.clientX;
    let Y = event.clientY;

    
    document.getElementById('invert').style.left=X -50 + "px";
    document.getElementById('invert').style.top=Y -50 + "px";
}

while(true){
    display()
}