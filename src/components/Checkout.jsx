// Import required modules and libraries
import {Navbar} from './Navbar';
import '../styles/checkout.css';

// Checkout confirmation page component
export const Checkout = () => {
  return (
    <div className='checkout'>
        <Navbar/>
        <div className='display'>
            <h1>Successfully Checked Out.</h1>
            <p>Thank you for your purchase!</p>
        </div>
    </div>
  )
}