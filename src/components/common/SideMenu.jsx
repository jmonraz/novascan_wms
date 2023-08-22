import React from "react";
import { Link } from "react-router-dom";

// images
import billingIcon from '../../assets/img/billinh_management_icon.png';
import integrationIcon from '../../assets/img/integration_manager_icon.png';
import inventoryIcon from '../../assets/img/warehouse_icon.png';
// import inventoryManagementIcon from '../../assets/img/adjustment_icon.png';
import locationsIcon from '../../assets/img/location_icon.png';
import receivingIcon from '../../assets/img/receive_product_icon.png';
import reportsIcon from '../../assets/img/report_icon.png';
import userManagementIcon from '../../assets/img/users_icon.png';
import itemIcon from '../../assets/img/item_icon.png';
import shippingTruckIcon from '../../assets/img/shipping_truck_icon.png';

const SideMenu = () => {
    return (
        <>
            <div className="side-menu">
                <Link to={"/Home/Products"}
                    className="icon-container"
                    data-label="Products"
                    style={{ textDecoration: "none", color: "inherit" }}>
                    <img src={itemIcon} alt="product_icon" /><p className="sidemenu-icon-label">Products</p>
                </Link>
                <div className="icon-container" data-label="Shipping"><img src={shippingTruckIcon} alt="shipping_icon" /><p className="sidemenu-icon-label">Shipping</p></div>
                <div className="icon-container" data-label="Receiving"><img src={receivingIcon} alt="receiving_icon" /><p className="sidemenu-icon-label">Receiving</p></div>
                <div className="icon-container" data-label="Inventory"><img src={inventoryIcon} alt="inventory_icon" /><p className="sidemenu-icon-label">Inventory</p></div>

                <div className="icon-container" data-label="Billing"><img src={billingIcon} alt="billing_icon" /><p className="sidemenu-icon-label">Billing</p></div>
                <div className="icon-container" data-label="Locations"><img src={locationsIcon} alt="locations_icon" /><p className="sidemenu-icon-label">Locations</p></div>
                <div className="icon-container" data-label="Reports"><img src={reportsIcon} alt="reports_icon" /><p className="sidemenu-icon-label">Reports</p></div>
                <div className="icon-container" data-label="Integration Manager"><img src={integrationIcon} alt="integration_icon" /><p className="sidemenu-icon-label">Integration Manager</p></div>
                <div className="icon-container" data-label="User Management"><img src={userManagementIcon} alt="user_management_icon" /><p className="sidemenu-icon-label">User Management</p></div>
            </div>
        </>
    );
};

export default SideMenu;