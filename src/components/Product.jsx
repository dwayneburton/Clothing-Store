// Import required modules and libraries
import {useContext} from 'react';
import {ShopContext} from './ShopContext';

// Product component for displaying individual product info
export const Product = (items) => {
  // Destructure product details from props
  const { id, productName, price, description, productImage } = items.data;

  // Access addToCart and cartItems from context
  const { addToCart, cartItems } = useContext(ShopContext);

  // Get quantity of the product currently in the cart
  const cartItemAmount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p><b>{productName}</b></p>
        <p>${price}</p>
        <p>{description}</p>
      </div>
      <button className="addToCart-btn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
}