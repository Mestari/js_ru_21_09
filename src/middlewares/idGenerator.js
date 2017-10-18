import {ADD_COMMENT} from "../constants";

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const CHARACTERS = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

const generateId = length => {
    let result = ''
    while (result.length < length) result += CHARACTERS[getRandomInt(0, CHARACTERS.length - 1)]
    return result
}

export default store => next => action => {
    const state = store.getState()

    if (action.type === ADD_COMMENT) {
        let id = null
        const existsCommentsIds = Object.keys(state.comments)

        while (!id || ~existsCommentsIds.indexOf(id)) id = generateId(12)

        action.payload.comment.id = id
    }

    next(action)
}