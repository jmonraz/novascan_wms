import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "../Dashboard/Dashboard";
import ProductsScreen from "../Products/Products";
import MainLayout from "../../components/common/MainLayout";

const HomeScreen = ({ handleLogout }) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout handleLogout={handleLogout} />} >
                    <Route
                        path='Dashboard'
                        index element={<Dashboard handleLogout={handleLogout} />} />
                    <Route
                        path="Products"
                        element={<ProductsScreen />} />
                </Route>

            </Routes>
        </>
    );
}

export default HomeScreen;