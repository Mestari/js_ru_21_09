import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'

class CommentList extends Component {
    state = {
        isOpen: false
    }

    render() {
        const {comments} = this.props
        if (!comments.length) return <h3>No Comments</h3>
        const commentElements = comments.map((comment) => <li key={comment.id}>
            <Comment comment={comment} />
        </li>)
        const commentsBody = this.state.isOpen && <div>
            <h3>Comments</h3>
            <ul>
                {commentElements}
            </ul>
        </div>

        return (
            <div>
                <button onClick={this.handleButtonClick}>
                    {this.state.isOpen ? 'close comments' : 'open comments'}
                </button>
                {commentsBody}
            </div>
        )
    }

    handleButtonClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

CommentList.defaultProps = {
    comments: []
}

CommentList.propTypes = {
    comments: PropTypes.array.isRequired
}

export default CommentList