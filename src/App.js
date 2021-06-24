import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Navbar from './compnents/layout/Navbar';
import Footer from './compnents/layout/Footer';
import ProductDetails from './pages/productDetails';

function App() {
  return (
    <BrowserRouter>
      <div className='App bg-gray-default h-screen relative'>
        <Navbar />
        <div className='container bg-yellow-100 '>
          <Switch>
            <Route path='/product-details'>
              <ProductDetails />
            </Route>
            <Route path='*'>
              <Redirect to='/product-details' />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
