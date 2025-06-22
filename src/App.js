// Import required modules and components
import {Register} from './components/Register';
import {Login} from './components/Login';
import {Shop} from './components/Shop';
import {Cart} from './components/Cart';
import {Checkout} from './components/Checkout';
import {ShopContextProvider} from "./components/ShopContext";
import {Routes, Route} from 'react-router-dom';

// Main application component with route and context setup
function App() {
  return (
    <div className='App'>
      {/*Providing the ShopContext to all child components*/}
      <ShopContextProvider>
        <Routes>
          {/*Defining the routes and their corresponding components*/}
          <Route path='/' element={<Shop/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='checkout' element={<Checkout/>}/>
        </Routes>
      </ShopContextProvider>
    </div>
  );
}

export default App;