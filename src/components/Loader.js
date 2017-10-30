import React from 'react'
import Localization from './Localization'

function Loader(props) {
    return (
        <h3>
            <Localization>Loading</Localization>...
        </h3>
    )
}

Loader.propTypes = {
}

export default Loader