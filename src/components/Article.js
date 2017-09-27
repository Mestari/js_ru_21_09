import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comments from './CommentList'

class Article extends Component {
    state = {
        isOpen: false,
        onButtonClick: () => {}
    }

    render() {
        const {article, isOpen, onButtonClick} = this.props
        this.state.isOpen = isOpen
        this.state.onButtonClick = onButtonClick
        const body = this.state.isOpen &&
            <section>
                <div>
                    {article.text}
                </div>
                <Comments comments={article.comments} />
            </section>

        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={this.handleButtonClick}>
                        {this.state.isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                {body}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        )

    }

    handleButtonClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
        this.state.onButtonClick()
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