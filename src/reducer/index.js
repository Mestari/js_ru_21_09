import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import filterSelected from './filterSelect'
import filterDateRange from './filterDateRange'

export default combineReducers({
    counter: counterReducer,
    articles,
    filterSelected,
    filterDateRange
})