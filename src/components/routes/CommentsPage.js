import React, { Component } from 'react'
import {connect} from 'react-redux'
import Loader from '../Loader'
import Comment from '../Comment'
import Pagination from '../Pagination'
import {checkAndLoadComments} from '../../AC'

class CommentsPage extends Component {
    static propTypes = {

    };

    componentWillMount() {
        this.props.checkAndLoadComments(this.props.page)
    }

    componentWillReceiveProps({ page, checkAndLoadComments }) {
        checkAndLoadComments(page)
    }

    render() {
        const {commentsCount} = this.props
        if (!commentsCount) return <Loader/>

        return (
            <div>
                <Pagination commentsCount = {commentsCount} />
                {this.getCommentsView()}
            </div>
        )
    }

    getCommentsView = () => {
        const {comments, loading} = this.props
        if (loading || !comments) return <Loader />
        const commentItems = comments.map(id => <li key={id}><Comment id={id}/></li>)
        return <ul>{commentItems}</ul>
    }
}

export default connect((state, { page }) => {
    const {commentsCount, pagination} = state.comments
    return {
        commentsCount,
        loading: pagination.getIn([page, 'loading']),
        comments: pagination.getIn([page, 'ids'])
    }
}, { checkAndLoadComments })(CommentsPage)