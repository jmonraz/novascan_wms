import React from "react";
import style from './Dashboard.module.css';

const Dashboard = ({ handleLogout }) => {
    return (
        <>
            {/* <NavBar handleLogout={handleLogout} />
            <SideMenu /> */}
            <div className={style["dashboard-container"]}>
                <div className={style["dashboard-box"]}>
                    <p>Pending Orders</p>
                </div>
                <div className={style["dashboard-box"]}>
                    <p>Occupied Locations</p>
                </div>
                <div className={style["dashboard-box"]}>
                    <p>Integration Manager Logs</p>
                </div>
                <div className={style["dashboard-box"]}>
                    <p>Hot Products</p>
                </div>
            </div>
        </>
    );
};

export default Dashboard;