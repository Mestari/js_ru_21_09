import React, {Component} from 'react'
import {connect} from 'react-redux'
import Comment from './Comment'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'
import CommentForm from './CommentForm'
import {createCommentsSelector} from '../selectors'

class CommentList extends Component {
    componentDidMount() {
        console.log('---', 'mounted')
    }

    componentWillUnmount() {
        console.log('---', 'unmounting')
    }

    componentWillReceiveProps() {
        console.log('---', 'updating')
    }

    render() {
        const {isOpen, toggleOpen} = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {getBody(this.props)}
            </div>
        )
    }
}

function getBody(props) {
    const {comments, isOpen, id} = props
    if (!isOpen) return null

    const body = comments.length ? (
        <ul>
            {comments.map(comment => <li key={comment.id}><Comment id = {comment.id}/></li>)}
        </ul>
    ) : <h3>No comments yet</h3>

    return (
        <div>
            {body}
            <CommentForm articleId = {id}/>
        </div>
    )
}


CommentList.defaultProps = {
    comments: []
}

CommentList.propTypes = {
    comments: PropTypes.array.isRequired
}

const createMapStateToProps = () => {
    const commentsSelector = createCommentsSelector()

    const mapStateToProps = (state, ownProps) => ({
        comments: commentsSelector(state, ownProps)
    })

    return mapStateToProps
}

export default connect(createMapStateToProps)(toggleOpen(CommentList))