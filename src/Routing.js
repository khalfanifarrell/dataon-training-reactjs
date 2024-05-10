import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { Layout } from "antd";
import Navbar from "./components/navbar/Navbar";
import ProductDetail from "./pages/ProductDetail";

function Routing() {
    return (
        <Layout className="layout">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Product />} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                </Routes>
            </BrowserRouter>
        </Layout>
    )
}

export default Routing