import React, { useState } from "react";
import { Link } from "react-router-dom";

import Search from "./Search";

// images
import profileIcon from '../../assets/img/profile_icon.png';
import settingsIcon from '../../assets/img/settings_icon.png';
import dashboardIcon from '../../assets/img/dashboard_icon.png';

const NavBar = ({ handleLogout }) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <div className="navbar-container">
                <div className="navbar-sleeve">
                    <p>NovaScan</p>
                </div>
                <div className="navbar-sleeve">
                    <Search />
                    <Link to={"/Home/Dashboard"}><div className="profile-icon-container"><img src={dashboardIcon} alt="dashboard-icon" /></div></Link>
                    <div className="profile-icon-container"><img src={settingsIcon} alt="settings-icon" /></div>
                    <div className="profile-icon-container"><img src={profileIcon} alt="profile-icon" onClick={toggleDropdown} />
                        {isDropdownOpen && (
                            <div className="dropdown-menu">
                                <p>User Id: jmonraz</p>
                                <p>Change Password</p>
                                <p onClick={handleLogout}>Logout</p>
                                <p>Help</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;