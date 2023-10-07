// Create an empty array to store the cart items
var cartItems = [];

// Get the cart items element
var cartItemsElement = document.getElementById("cart-items");

// Add an event listener to the button to listen for clicks
document.addEventListener("DOMContentLoaded", function(){
    var addToCartButtons = document.querySelectorAll(".add-to-cart");
    for(let button of addToCartButtons){
        button.addEventListener("click", addToCart);
    }
    updateCartDisplay();
});

// delete an item from the cart
function deleteFromCart(index) {
    cartItems.splice(index, 1);
    updateCartDisplay();
}

// Add an item to the cart
function addToCart(event) {
    var button = event.target;
    var product = button.parentNode;
    var name = product.querySelector(".name").innerHTML;
    var description = product.querySelector(".description").innerHTML;
    cartItems.push({
        name: name,
        description: description
    });
    updateCartDisplay();
}

// Update the cart display
function updateCartDisplay() {
  // Clear the existing cart items
  cartItemsElement.innerHTML = "";

  // Add each item to the cart items element
  for (var i = 0; i < cartItems.length; i++) {
    var item = cartItems[i];
    var newItem = document.createElement("li");
    newItem.innerHTML = item.name + ": " + item.description + "<button style='background: #ff005d; color: white; width: fit-content; padding: 10px 20px;border: none;border-radius: 4px;cursor: pointer;' onclick='deleteFromCart("+i+")'>delete</button>";

    // Add a delete button for each
    cartItemsElement.appendChild(newItem);
  }
}
