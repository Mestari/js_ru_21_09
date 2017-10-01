import React, {Component} from 'react'

class Accordion extends Component {
    state = {
        openElementId: null
    }

    toggleOpenElement = (openElementId) => (ev) => {
        this.setState({
            openElementId: this.state.openElementId === openElementId ? null : openElementId
        })
    }
}

export default Accordion