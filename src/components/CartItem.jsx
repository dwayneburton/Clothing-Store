// Import required modules and libraries
import {useContext} from "react";
import {ShopContext} from "./ShopContext";

// Component for rendering an individual cart item
export const CartItem = (items) => {
  // Destructuring the cart item data from the props
  const {id, productName, price, productImage} = items.data;

  // Access cart state and update functions from context
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p><b>{productName}</b></p>
        <p>${price}</p>
        <div className="countHandler">
          {/* Button to decrease the quantity */}
          <button onClick={() => removeFromCart(id)}> - </button>
          {/* Input field to display and update the quantity */}
          <input value={cartItems[id]} onChange={(event) => updateCartItemCount(Number(event.target.value), id)}/>
          {/* Button to increase the quantity */}
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};