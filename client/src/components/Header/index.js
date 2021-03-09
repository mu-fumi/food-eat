import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import "./siteHeader.css";
import "antd/dist/antd.css";

const SiteHeader = () => {

    const user =
        localStorage.getItem('user') ?
            JSON.parse(localStorage.getItem('user')) : ''

    const handleClick = () => {
        localStorage.clear()
        window.location.replace("/");
    }

    return (

        <nav className="navbar  navbar-light fixed-top  bg-dark ">
            <nav className="navbar-brand text-white"  >
                <Link className=" text-white" to="/">
                    Home
                </Link>
            </nav>

            <nav className="navbar navbar-expand ">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        {user ?
                            <Link className="nav-link text-white" to="/userinfo">
                                WellCome,  {user.name}
                            </Link>
                            :
                            <Link className="nav-link text-white" to="/login">
                                login
                            </Link>
                        }
                    </li>
                    <li className="nav-item">
                        {user ? <span className="nav-link text-white" onClick={handleClick}>
                            Logout
                        </span> : ""}
                    </li>
                </ul>
            </nav>
        </nav>
    );
};

export default SiteHeader;