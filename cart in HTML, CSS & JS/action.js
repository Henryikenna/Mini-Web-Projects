document.addEventListener("DOMContentLoaded", function() {
    // Create an empty array to store the cart items
    var cartItems = [];
  
    // Get all the add to cart buttons
    var addToCartButtons = document.getElementsByClassName("add-to-cart-button");
  
    // Add an event listener to each button to listen for clicks
    for (var i = 0; i < addToCartButtons.length; i++) {
      addToCartButtons[i].addEventListener("click", function(event) {
        // Get the product name and description from the button's data attributes
        var productName = event.target.getAttribute("data-name");
        var productDescription = event.target.getAttribute("data-description");
  
        // Add the product to the cart
        addToCart(productName, productDescription);
      });
    }
  
    // Add an item to the cart
    function addToCart(name, description) {
      // Create a new object to store the product information
      var item = {
        name: name,
        description: description
      };
  
      // Add the item to the cart
      cartItems.push(item);
  
      // Update the cart display
      updateCartDisplay();
    }
  
    // Update the cart display
    function updateCartDisplay() {
      // Get the cart items element
      var cartItemsElement = document.getElementById("cart-items");
  
      // Clear the existing cart items
      cartItemsElement.innerHTML = "";
  
      // Add each item to the cart items element
      for (var i = 0; i < cartItems.length; i++) {
        var item = cartItems[i];
        var newItem = document.createElement("li");
        newItem.innerHTML = item.name + ": " + item.description;
        cartItemsElement.appendChild(newItem);
      }
    }
  });
  