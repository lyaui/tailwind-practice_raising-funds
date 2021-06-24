import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import ProductDetails from './pages/productDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/product-details'>
          <ProductDetails />
        </Route>
        <Route path='*'>
          <Redirect to='/product-details' />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
