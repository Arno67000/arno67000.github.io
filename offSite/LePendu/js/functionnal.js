//Randomized 

function randomMinMax(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



//Animating functions
function animate(element, animation) {
    if(element.length > 0) {
        for(let i = 0; i < element.length; i++) {
            element[i].classList.add(animation);
        }
    } else {
        console.log('notFound')
    }
}
function clearAnimations(element, animation) {
    if(element.length > 0) {
        for(let i = 0; i < element.length; i++) {
            element[i].classList.remove(animation);
        }
    } else {
        console.log('notFound')
    }
}