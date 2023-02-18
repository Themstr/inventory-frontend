import { Routes, Route } from 'react-router-dom';
import { Orders } from './Components/Orders';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Products } from './Components/Products';
import { ProductsCreate } from './Components/ProductsCreate';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/create" element={<ProductsCreate />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  );
}

export default App;
