import React, { Component } from "react"
import {NavLink} from 'react-router-dom'
import {COMMENTS_COUNT_PER_PAGE} from "../constants";

class Pagination extends Component {

    render() {
        const { commentsCount } = this.props
        const maxPageNum = Math.ceil(commentsCount / COMMENTS_COUNT_PER_PAGE)
        const pagination = []

        for (let page = 1; page <= maxPageNum; page++) {
            pagination.push(<li key={page}>
                <NavLink to={`/comments/${page}`} activeStyle={{color: 'red'}}>
                    {page}
                </NavLink>
            </li>)
        }

        return (
            <ul>
                {pagination}
            </ul>
        )
    }
}

export default Pagination