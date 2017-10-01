import React from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import accordion from '../decorators/accordion'

function ArticleList(props) {
    const {articles, openElementId, toggleOpenElement} = props
    if (!articles.length) return <h3>No Articles</h3>
    const articleElements = articles.map((article) => <li key={article.id}>
        <Article article={article}
                 isOpen={article.id === openElementId}
                 onButtonClick={toggleOpenElement(article.id)}
        />
    </li>)

    return (
        <ul>
            {articleElements}
        </ul>
    )
}


ArticleList.defaultProps = {
    articles: []
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default accordion(ArticleList)