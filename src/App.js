import React, {useState} from "react";

import Header from "./container/Header/Header";
import Layout from "./components/Layout/Layout";
import Authentication from "./container/Authentication/Authentication";
import Products from "./container/Products/Products";
import Footer from "./container/Footer/Footer";

import "./App.scss";

function App() {
  const [activePage, setActivePage] = useState("products");

  const onRedirect = (page) => {
    setActivePage(page);
  };
  return (
    <div>
      <Header onRedirect={onRedirect} />
      <Layout>
        {activePage === "products" ? (
          <Products />
        ) : activePage === "authentication" ? (
          <Authentication />
        ) : (
          <div className="text-danger vh-100 d-flex justify-content-center align-items-center flex-column display-1">
            <h1 className="display-2 font-weight-bold">Error 404!</h1>
            <h2>Page not found</h2>
          </div>
        )}
      </Layout>
      <Footer />
    </div>
  );
}

export default App;

