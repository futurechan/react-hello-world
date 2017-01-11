import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom'
import { Link } from 'react-router';
import styles from  "./SideMenu.css";

export default class SideMenu extends Component {
    render() {
        return (
            <div className={styles.sideNav}>
                <ul className={styles.navMenu}>
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/threats">Threat Log</Link></li>
                    <li><Link to="/apps">Apps</Link></li>
                    <li><Link to="/devices">Devices</Link></li>
                    <li><Link to="/profiles">Profiles</Link></li>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/policy">Policy</Link></li>
                    <li><Link to="/os-risk">OS Risk</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                </ul>
            </div>
        );
    }
}

