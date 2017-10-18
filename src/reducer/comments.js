import {  } from '../constants'
import {normalizedComments} from '../fixtures'
import {ADD_COMMENT} from "../constants"

const commentsMap = normalizedComments.reduce((acc, comment) => {
    return {...acc, [comment.id]: comment}
}, {})

export default (commentsState = commentsMap, action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case ADD_COMMENT:
            return {...commentsState, [payload.comment.id]: payload.comment}
    }

    return commentsState
}