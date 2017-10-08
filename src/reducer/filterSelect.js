import {FILTER_SELECTED} from '../constants'

export default (filterSelectState = [], action) => {
    const {type, payload} = action
    switch (type) {
        case FILTER_SELECTED:
            return filterSelectState = payload.articles
    }
    return filterSelectState
}