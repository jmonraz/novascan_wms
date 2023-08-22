import React from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";
import NavBar from "./NavBar";

const MainLayout = ({ handleLogout }) => {
    return (
        <>

            <NavBar handleLogout={handleLogout} />
            <SideMenu />

            <Outlet />

        </>
    )
}

export default MainLayout;