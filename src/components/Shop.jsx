// Import required modules and libraries
import {Navbar} from './Navbar';
import {PRODUCTS} from '../products';
import {Product} from './Product';
import '../styles/shop.css';

// Shop component to display all available products
export const Shop = () => {
  return (
    <div className="shop">
      <Navbar/>
      <h1>Shop</h1>
      <div className='products'>
        {/* Render a Product component for each item in the PRODUCTS array */}
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
}