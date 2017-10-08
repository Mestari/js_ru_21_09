import {FILTER_DATE_RANGE} from '../constants'

export default (filterDateRangeState = {from: null, to: null}, action) => {
    const {type, payload} = action
    switch (type) {
        case FILTER_DATE_RANGE:
            return payload
    }
    return filterDateRangeState
}