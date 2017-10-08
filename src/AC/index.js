import {INCREMENT, DELETE_ARTICLE, FILTER_SELECTED, FILTER_DATE_RANGE} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }

    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function filterSelect(articles) {
    return {
        type: FILTER_SELECTED,
        payload: { articles }
    }
}

export function filterDateRange(fromToObj) {
    return {
        type: FILTER_DATE_RANGE,
        payload: fromToObj
    }
}