import React, {Component} from 'react'
import Comment from '../Comment'
import PropTypes from 'prop-types'
import toggleOpen from '../../decorators/toggleOpen'

import './style.css'

class CommentList extends Component {
    state = {
        commentUsername: '',
        commentText: '',
        commentUsernameClass: 'error',
        commentTextClass: 'error',
        addButtonIsActive: false
    }

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
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {comments, isOpen} = this.props
        if (!isOpen) return null

        const body = comments.length ? (
            <ul>
                {comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}
            </ul>
        ) : <h3>No comments yet</h3>

        return (
            <div>
                {body}
                <div>
                    <h4>Add new comment:</h4>
                    <div>User: <input type='text'
                                      value={this.state.commentUsername}
                                      onChange={this.handleUserChange}
                                      className={this.state.commentUsernameClass}/>
                    </div>
                    <div>Text: <textarea onChange={this.handleTextChange}
                                         value={this.state.commentText}
                                         className={this.state.commentTextClass}></textarea>
                    </div>
                    <div>
                        <button onClick={this.handleSendComment} disabled={!this.state.addButtonIsActive}>Add</button>
                    </div>
                </div>
            </div>
        )
    }

    handleUserChange = ev => {
        this.setState({
            commentUsername: ev.target.value,
            commentUsernameClass: this.setClass(ev.target.value.length)
        }, () => this.setButtonState() )
    }

    handleTextChange = ev => {
        this.setState({
            commentText: ev.target.value,
            commentTextClass: this.setClass(ev.target.value.length)
        }, () => this.setButtonState() )
    }

    handleSendComment = ev => {
        this.setState({
            commentUsername: '',
            commentText: '',
            addButtonIsActive: false,
            commentUsernameClass: 'error',
            commentTextClass: 'error'
        }, () => console.log('Comment added') )
    }

    setClass = (length) => length > 50 || length < 10 ? 'error' : 'active'

    setButtonState = () => this.setState({
            addButtonIsActive: this.state.commentTextClass === 'active' && this.state.commentUsernameClass === 'active'
        })
}


CommentList.defaultProps = {
    comments: []
}

CommentList.propTypes = {
    comments: PropTypes.array.isRequired
}

export default toggleOpen(CommentList)