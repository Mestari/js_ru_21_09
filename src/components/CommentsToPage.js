import React from 'react'
import CommentsPage from './routes/CommentsPage'

function CommentsToPage({match}) {
    return <CommentsPage page = {match.params.page}/>
}

export default CommentsToPage