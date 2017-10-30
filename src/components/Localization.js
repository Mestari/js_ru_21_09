import React from 'react'
import PropTypes from 'prop-types'

function Localization(props, context) {
    if (typeof props.children !== 'string') {
        return <span>{props.children}</span>
    }
    return <span>{context.localization[props.children] || props.children}</span>
}

Localization.propTypes = {
    children: PropTypes.string
}

Localization.contextTypes = {
    localization: PropTypes.object.isRequired
}

export default Localization