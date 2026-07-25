//  let addItemButton = document.getElementById();
//     let removebutton = document.getElementById();
//     let cartList = document.getElementById();

let shoppingList = [];

function addItem(){
    
 let item = prompt("what would you like to add?: ");
    
    if (item ===""){
        alert("Please enter an item!");
        return;
    }else if  (shoppingList.includes(item)) {
        document.getElementById("shop").textContent =
            `${item} is already in your shopping list!`;
        return; 
    }

    shoppingList.push(item);

    document.getElementById("shop").innerHTML=`${item} has been 
    successfully added to the cart`;
    document.getElementById("cart").innerHTML=`
    current cart: ${shoppingList} `; 
}
function removeLastItem(){

    let removedItem = shoppingList.pop();

    document.getElementById("shop").textContent =`${removedItem} has been 
    successfully removed to the cart`;

    document.getElementById("cart").innerHTML=`
    current cart: ${shoppingList}`; 
}





// function displaylist(){
// }