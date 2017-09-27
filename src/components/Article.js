import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comments from './CommentList'

class Article extends Component {
    state = {
        isOpenComments: false,
        isOpen: false
    }

    render() {
        const {article, isOpen, onButtonClick} = this.props
        this.state.isOpen = isOpen
        const comments = this.state.isOpenComments && <Comments comments={article.comments} />
        const body = this.state.isOpen &&
            <section>
                <div>
                    {article.text}
                </div>
                <button onClick={this.handleCommentsButtonClick}>
                    {this.state.isOpenComments ? 'close comments' : 'open comments'}
                </button>
                {comments}
            </section>

        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={onButtonClick}>
                        {this.state.isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                {body}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }

    handleCommentsButtonClick = () => {
        this.setState({
            isOpenComments: !this.state.isOpenComments
        })
    }
}

Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
        date: PropTypes.string.isRequired,
        comments: PropTypes.array
    }).isRequired,
    isOpen: PropTypes.bool,
    onButtonClick: PropTypes.func
}


export default Article