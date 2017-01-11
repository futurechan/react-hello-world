import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom'
import { Link } from 'react-router';

import { NavDropdown, MenuItem } from 'react-bootstrap'

import links from "./links"

export default class NavMenu extends Component {

    renderLink(link, index) {
        return (
            <MenuItem >
                <Link to={link.link}>{link.text}</Link></MenuItem>
        )
    }

    render() {
        return (
            <NavDropdown title={"Mo2"}>

                {links.map(this.renderLink)}

            </NavDropdown>
        );
    }
}

