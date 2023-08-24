import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "../Dashboard/Dashboard";
import ProductsScreen from "../Products/Products";
import Shipping from "../Shipping";
import MainLayout from "../../components/common/MainLayout";
import ReceivingScreen from "../Receiving/ReceivingScreen";

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
                    <Route
                        path="Shipping"
                        element={<Shipping />} />
                    <Route
                        path="Receiving"
                        element={<ReceivingScreen />} />
                </Route>

            </Routes>
        </>
    );
}

export default HomeScreen;