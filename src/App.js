import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Navbar from './compnents/layout/Navbar';
import Footer from './compnents/layout/Footer';
import ProductDetails from './pages/productDetails';

function App() {
  return (
    <BrowserRouter>
      <div className='App h-screen font-NotoSans'>
        <Navbar />
        <Switch>
          <Route path='/product-details'>
            <ProductDetails />
          </Route>
          <Route path='*'>
            <Redirect to='/product-details/introductoin' />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
