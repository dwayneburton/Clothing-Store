// Import required modules and libraries
import {createContext, useState} from 'react';
import {PRODUCTS} from '../products';

// Initialize cart with 0 quantity for each product
const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < PRODUCTS.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

// Create a context for global shop state
export const ShopContext = createContext(null);

// Context provider component to manage and share cart state
export const ShopContextProvider = (items) => {
  // State for cart item quantities
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Calculate total price of all items in the cart
  const getCartPrice = () => {
    let totalPrice = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalPrice += cartItems[item] * itemInfo.price;
      }
    }
    return totalPrice;
  };

  // Add one unit of a product to the cart
  const addToCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
  };

  // Remove one unit of a product from the cart
  const removeFromCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
  };

  // Update a product's quantity in the cart
  const updateCartItemCount = (newAmount, itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: newAmount }));
  };

  // Clear the cart (used during checkout)
  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  // Bundle state and actions into context value
  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getCartPrice,
    checkout,
  };

  // Provide context to child components
  return (
    <ShopContext.Provider value={contextValue}>
      {items.children}
    </ShopContext.Provider>
  );
};