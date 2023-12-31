import "./scss/app.scss";
import Header from "./components/header";
import Home from './pages/Home'
import NotFound from "./pages/NotFound";
import Cart from './pages/Cart'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path='/' element ={<Home searchValue={searchValue} />} />
            <Route path="/cart" element ={<Cart />} />
            <Route path="*" element ={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
