import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'

class CommentList extends Component {
    render() {
        const {comments} = this.props
        if (!comments.length) return <h3>No Comments</h3>
        const commentElements = comments.map((comment) => <li key={comment.id}>
            <Comment comment={comment} />
        </li>)

        return (
            <div>
                <h3>Comments</h3>
                <ul>
                    {commentElements}
                </ul>
            </div>
        )
    }
}

CommentList.defaultProps = {
    comments: []
}

CommentList.propTypes = {
    comments: PropTypes.array.isRequired
}

export default CommentList