import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem'
import Localization from '../Localization'

class Menu extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h2><Localization>Main Menu</Localization></h2>
                {this.props.children}
            </div>
        )
    }
}

export {MenuItem}
export default Menu