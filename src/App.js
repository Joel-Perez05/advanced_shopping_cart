import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <Header />
        <div>
          <Routes>
            <Route element={<Home />} path="/" exact />
            <Route element={<Cart />} path="/cart" />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
