import React, {Component as ReactComponent} from 'react'

export default (OriginalComponent) => class DecoratedComponent extends ReactComponent {
    state = {
        openElementId: null
    }

    toggleOpenElement = (openElementId) => (ev) => {
        this.setState({
            openElementId: this.state.openElementId === openElementId ? null : openElementId
        })
    }

    render() {
        return <OriginalComponent {...this.props}
                                  openElementId = {this.state.openElementId}
                                  toggleOpenElement = {this.toggleOpenElement}
        />
    }
}