import React, { Component } from "react";

import "./Header.scss";

import logo from "../../assets/Logo/logo.jpg";

class Header extends Component {
    constructor() {
        super();
        this.onRedirect = this.onRedirect.bind(this);
    }

    onRedirect(path) {
        this.props.onRedirect(path);
    }

    render() {
        return (
            <div className="header">
                <div className="container header-container">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="menu">
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Team</li>
                            <li>Prices</li>
                        </ul>
                    </div>
                    <button className="button-join" onClick={() => this.onRedirect("authentication")}>
                            Join us
                        </button>
                </div>
            </div>
        );
    }
}

export default Header;