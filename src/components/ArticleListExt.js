import React from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Accordion from './Accordion'

class ArticleList extends Accordion {
    render() {
        const {articles} = this.props
        if (!articles.length) return <h3>No Articles</h3>
        const articleElements = articles.map((article) => <li key={article.id}>
            <Article article={article}
                     isOpen={article.id === this.state.openElementId}
                     onButtonClick={this.toggleOpenElement(article.id)}
            />
        </li>)

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

ArticleList.defaultProps = {
    articles: []
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default ArticleList