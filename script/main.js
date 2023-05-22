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

