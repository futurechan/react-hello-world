import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom'
import { Link } from 'react-router';

export default class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/">Dashboard</Link>
                </div>
                <div>
                    <Link to="/about">About</Link>
                </div>
                <br/>
                <hr/>
                <br/>
                {this.props.children}
            </div>
        );
    }
}

