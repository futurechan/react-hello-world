import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom'
import { Link } from 'react-router';
import styles from  "./Nav.css";

import links from "./links"

export default class SideMenu extends Component {

    renderLink(link, index) {
        return (
            <li eventKey={index}>
                <Link to={link.link}>{link.text}</Link></li>
        )
    }

    render() {
        return (
            <div className={styles.sideNav}>
                <ul className={styles.navMenu}>
                    {links.map(this.renderLink)}
                </ul>
            </div>
        );
    }
}

