
function display(event) {
    let X = event.clientX;
    let Y = event.clientY;

    if(!document.getElementById('flashlight').classList.contains('flashlight')) {
        document.getElementById('flashlight').classList.add('flashlight');
    }

    document.getElementById('flashlight').style.left=X -50 + "px";
    document.getElementById('flashlight').style.top=Y -50 + "px";
}

function toggle_flashlight(){
    if(document.getElementById('flashlight').classList.contains('flashlight')) {
        document.getElementById('flashlight').classList.add('reverse_flashlight');
        document.getElementById('flashlight').classList.remove('flashlight');
    }
    else {
        document.getElementById('flashlight').classList.remove('reverse_flashlight');
        document.getElementById('flashlight').classList.add('flashlight');
        
    }
}