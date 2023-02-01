import './App.css';
import { Navbar } from './Components/Navbar';
import { ProductList } from './Components/ProductList';
import { productCardType } from './Components/ProductCardSmall';
import { GrHeader } from './Components/GrHeader';
import { FooterGR } from './Components/Footer';
import { Products } from './Product/products';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';

function App() {
  let cards : productCardType[] = []
  return (
    <Provider store={store}>

   
    <div className="App">
      <GrHeader/>
      <Navbar></Navbar>
      <ProductList cards={Products}/>
      <FooterGR/>
    </div>
    </Provider>
  );
}

export default App;
