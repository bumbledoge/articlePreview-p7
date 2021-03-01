let shareButton = document.querySelector('.share');
let active = document.querySelector('.active');
let sher = document.querySelector('.sher');


function clicked() {
    
    let val = active.style.opacity;

    if(val == 1) {
        active.style.opacity = '0';
    }
    else {
        active.style.opacity = '1';
    }
}