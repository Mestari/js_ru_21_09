import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
    render() {
        const {comment} = this.props

        return (
            <div>
                <h4>{comment.user}</h4>
                <section>{comment.text}</section>
            </div>
        )
    }
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        user: PropTypes.string.isRequired
    }).isRequired
}

export default Comment