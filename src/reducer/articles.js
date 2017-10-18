import {normalizedArticles} from '../fixtures'
import {ADD_COMMENT, DELETE_ARTICLE} from '../constants'

const articlesMap = normalizedArticles.reduce((acc, article) => {
    return {...acc, [article.id]: article}
}, {})

export default (articleState = articlesMap, action) => {
    const {type, payload} = action
    switch (type) {
        case DELETE_ARTICLE:
            return Object.keys(articleState)
                         .filter(id => id !== payload.id)
                         .reduce((res, id) => ({...res, [id]: articleState[id]}), {})

        case ADD_COMMENT:
            articleState[payload.articleId].comments.push(payload.comment.id)
            return articleState
    }
    return articleState
}