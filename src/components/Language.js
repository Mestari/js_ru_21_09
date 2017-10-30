import React, { Component } from 'react'
import PropTypes from 'prop-types'
import messages from '../messages'

class Language extends Component {
    static propTypes = {
        language: PropTypes.string
    }

    static childContextTypes = {
        localization: PropTypes.object
    }

    getChildContext() {
        return {
            localization: messages[this.props.language]
        }
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default Language