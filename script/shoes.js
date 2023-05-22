function firstColor(){
    document.querySelector(`.first-color`).classList.add(`color-active`)
    document.querySelector(`.second-color`).classList.remove(`color-active`)
    document.querySelector(`.third-color`).classList.remove(`color-active`)
    document.querySelector(`.fourth-color`).classList.remove(`color-active`)
}
function secondColor(){
    document.querySelector(`.first-color`).classList.remove(`color-active`)
    document.querySelector(`.second-color`).classList.add(`color-active`)
    document.querySelector(`.third-color`).classList.remove(`color-active`)
    document.querySelector(`.fourth-color`).classList.remove(`color-active`)
}
function thirdColor(){
    document.querySelector(`.first-color`).classList.remove(`color-active`)
    document.querySelector(`.second-color`).classList.remove(`color-active`)
    document.querySelector(`.third-color`).classList.add(`color-active`)
    document.querySelector(`.fourth-color`).classList.remove(`color-active`)
}
function fourthColor(){
    document.querySelector(`.first-color`).classList.remove(`color-active`)
    document.querySelector(`.second-color`).classList.remove(`color-active`)
    document.querySelector(`.third-color`).classList.remove(`color-active`)
    document.querySelector(`.fourth-color`).classList.add(`color-active`)
}
function firstSize(){
    document.querySelector(`.first-sz`).classList.add(`sz-active`)
    document.querySelector(`.second-sz`).classList.remove(`sz-active`)
    document.querySelector(`.third-sz`).classList.remove(`sz-active`)
    document.querySelector(`.fourth-sz`).classList.remove(`sz-active`)
}
function secondSize(){
    document.querySelector(`.first-sz`).classList.remove(`sz-active`)
    document.querySelector(`.second-sz`).classList.add(`sz-active`)
    document.querySelector(`.third-sz`).classList.remove(`sz-active`)
    document.querySelector(`.fourth-sz`).classList.remove(`sz-active`)
}
function thirdSize(){
    document.querySelector(`.first-sz`).classList.remove(`sz-active`)
    document.querySelector(`.second-sz`).classList.remove(`sz-active`)
    document.querySelector(`.third-sz`).classList.add(`sz-active`)
    document.querySelector(`.fourth-sz`).classList.remove(`sz-active`)
}
function fourthSize(){
    document.querySelector(`.first-sz`).classList.remove(`sz-active`)
    document.querySelector(`.second-sz`).classList.remove(`sz-active`)
    document.querySelector(`.third-sz`).classList.remove(`sz-active`)
    document.querySelector(`.fourth-sz`).classList.add(`sz-active`)
}

let cartCount = 0;
let cartClickingCount = 1;

function cartBtn(){
    cartCount++;
    document.querySelector(`.circle`).innerHTML = cartCount;
    document.querySelector(`.circle`).style.display = `block`
}

function cartCountChecking(){
    if(cartCount == 0){
        document.querySelector(`#product-1`).style.display = `none`;
        document.querySelector(`#product-2`).style.display = `none`;
        document.querySelector(`#product-3`).style.display = `none`;
        document.querySelector(`.empty-cart`).style.display = `block`;
    }
    else if(cartCount == 1){
        document.querySelector(`#product-1`).style.display = `flex`;
        document.querySelector(`.empty-cart`).style.display = `none`;
    }
    else if(cartCount == 2){
        document.querySelector(`#product-1`).style.display = `flex`;
        document.querySelector(`#product-2`).style.display = `flex`;
        document.querySelector(`.empty-cart`).style.display = `none`;
    }
    else if(cartCount == 3){
        document.querySelector(`#product-1`).style.display = `flex`;
        document.querySelector(`#product-2`).style.display = `flex`;
        document.querySelector(`#product-3`).style.display = `flex`;
        document.querySelector(`.empty-cart`).style.display = `none`;
    }
    else{
        document.querySelector(`#product-1`).style.display = `flex`;
        document.querySelector(`#product-2`).style.display = `flex`;
        document.querySelector(`#product-3`).style.display = `flex`;
        document.querySelector(`.empty-cart`).style.display = `none`;
    }
}

function cartOpening(){
    cartClickingCount++;
    if(cartClickingCount%2 == 0){
        document.querySelector(`.cart-box`).style.display = `block`;
        
    }
    else{
        document.querySelector(`.cart-box`).style.display = `none`;
    }
    cartCountChecking();
}