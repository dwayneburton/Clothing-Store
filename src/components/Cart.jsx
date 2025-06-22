// Import required modules and libraries
import {useContext} from 'react';
import {PRODUCTS} from '../products';
import {Navbar} from './Navbar';
import {ShopContext} from './ShopContext';
import {CartItem} from './CartItem';
import {useNavigate} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import AWS from 'aws-sdk';
import awsConfig from '../awsconfig';
import '../styles/cart.css';

// Configure AWS with credentials from awsConfig
AWS.config.update(awsConfig);

// Initialize DynamoDB client
const dynamoDB = new AWS.DynamoDB.DocumentClient();

// Cart component for displaying and processing cart items
export const Cart = () => {
  // Access cart state and actions from context
  const { cartItems, getCartPrice, checkout } = useContext(ShopContext);

  // Calculate total price of all items in the cart
  const totalPrice = getCartPrice();

  // React Router hook for navigation
  const navigate = useNavigate();

  // Write the cart order to AWS DynamoDB
  const writeCartItemsToDynamoDB = async () => {
    const orderId = uuidv4(); // Generate a unique UUID

    const params = {
      TableName: 'Orders',
      Item: {
        OrderID: orderId,
        cartItems: cartItems,
        totalPrice: totalPrice.toFixed(2),
      },
    };

    try {
      await dynamoDB.put(params).promise();
      console.log('Cart items written to DynamoDB successfully!');
    } catch (error) {
      console.error('Error writing cart items to DynamoDB:', error);
    }
  };

  return (
    <div className="cart">
      <Navbar/>
      <h1>Cart Items</h1>

      <div className='cartItems'>
        {/* Render only products that are in the cart */}
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      <div className='checkout'>
        {/* Display the subtotal */}
        <p>Subtotal: ${totalPrice.toFixed(2)}</p>

        {/* Button to return to shop */}
        <button onClick={() => navigate('/')}>Continue Shopping</button>
       
        {/* Button to complete checkout */}
        <button onClick={() => {
          if (totalPrice > 0) {
            writeCartItemsToDynamoDB();       // Save order to DynamoDB
            checkout();                       // Clear cart
            navigate('/checkout');            // Go to confirmation page
          } else {
            alert('Shopping cart is empty');  // Prevent empty checkout
          }
        }}>Checkout</button>
      </div>
    </div>
  );
}