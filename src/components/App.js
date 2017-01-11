import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom'

import Nav from './nav/Nav'
import SideMenu from './sideMenu/SideMenu'
import styles from './App.css'

export default class App extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <SideMenu/>

                <div className={styles.mainContent}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

