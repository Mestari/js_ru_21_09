import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../../AC'

import './style.css'

class CommentForm extends Component {
    static propTypes = {
    };

    state = {
        user: '',
        text: ''
    }

    render() {
        const {articleId} = this.props
        return (
            <form onSubmit = {this.handleSubmit(articleId)}>
                user: <input value = {this.state.user}
                             onChange = {this.handleChange('user')}
                             className = {this.getClassName('user')} />
                comment: <textarea value = {this.state.text}
                                onChange = {this.handleChange('text')}
                                className = {this.getClassName('text')} />
                <input type = "submit" value = "submit" disabled = {!this.isValidForm()}/>
            </form>
        )
    }

    handleSubmit = (articleId) => ev => {
        ev.preventDefault()
        this.setState({
            user: '',
            text: ''
        })

        this.props.addComment(articleId, {user: this.state.user, text: this.state.text})
    }

    isValidForm = () => ['user', 'text'].every(this.isValidField)

    isValidField = type => this.state[type].length >= limits[type].min

    getClassName = type => this.isValidField(type) ? '' : 'form-input__error'

    handleChange = type => ev => {
        const {value} = ev.target
        if (value.length > limits[type].max) return
        this.setState({
            [type]: value
        })
    }
}

const limits = {
    user: {
        min: 10,
        max: 50
    },
    text: {
        min: 10,
        max: 50
    }
}

export default connect(null, { addComment })(CommentForm)