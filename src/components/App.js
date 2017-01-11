import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom'

import TopNav from './nav/TopNav'
import SideMenu from './nav/SideMenu'
import styles from './App.css'

export default class App extends Component {
    render() {
        return (
            <div>
                <TopNav/>
                <SideMenu/>

                <div className={styles.mainContent}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

