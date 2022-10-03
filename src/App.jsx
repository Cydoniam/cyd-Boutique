import React from "react";
import "./scss/app.scss";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

export const AppContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState("");

  console.log(searchValue, "input");

  return (
    <AppContext.Provider value={{ searchValue, setSearchValue }}>
      <div className="section-inner">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
