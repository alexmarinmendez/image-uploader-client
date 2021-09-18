import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './Landing';
import Offer from './Offer';
import Product from './Product';

function App() {
  return (
    <BrowserRouter>
        <Route exact path='/' component={Landing}></Route>
        <Route exact path='/offer' component={Offer}></Route>
        <Route exact path="/product" component={Product}></Route>
    </BrowserRouter>
  );
}

export default App;
