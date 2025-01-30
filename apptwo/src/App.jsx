import React from "react";
import ReactDOM from "react-dom/client";
import Header from "components/Header";
import Footer from "components/Footer";
import Login from "components/Login";
import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header/>
    <div className="login"> 
      <Login/>
    </div>
    <Footer/>
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)