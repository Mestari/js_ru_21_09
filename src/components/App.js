import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import ArticlesPage from './routes/ArticlesPage'
import CommentsPage from './routes/CommentsPage'
import Filters from './Filters'
import Counter from './Counter'
import Menu, {MenuItem} from './Menu'
import Language from './Language'
import Localization from './Localization'

class App extends Component {
    state = {
        username: '',
        language: 'en'
    }

    static childContextTypes = {
        user: PropTypes.string
    }

    getChildContext() {
        return {
            user: this.state.username
        }
    }

    render() {
        const {username} = this.state
        console.log('---', 1)

        return (
            <Language language = {this.state.language}>
                <div>
                    <h1><Localization>App name</Localization></h1>
                    <ul>
                        <li onClick={this.switchLanguage('en')}>En</li>
                        <li onClick={this.switchLanguage('ru')}>Ru</li>
                    </ul>
                    <Menu>
                        <MenuItem to = '/articles'><Localization>articles</Localization></MenuItem>
                        <MenuItem to = '/filters'><Localization>filters</Localization></MenuItem>
                        <MenuItem to = '/counter'><Localization>counter</Localization></MenuItem>
                        <MenuItem to = '/comments/1'><Localization>comments</Localization></MenuItem>
                    </Menu>
                    <Localization>User</Localization>: <input type = 'text' value = {username} onChange = {this.handleUserChange}/>
                    <Switch>
                        <Redirect from = '/' exact to = '/articles'/>
                        <Route path = '/counter' component = {Counter} exact />
                        <Route path = '/filters' component = {Filters} />
                        <Route path = '/articles/new' render = {this.newArticlePage} />
                        <Route path = '/articles' component = {ArticlesPage} />
                        <Route path = '/comments' component = {CommentsPage}/>
                        <Route path = '*' render = {this.notFound} />
                    </Switch>
                </div>
            </Language>
        )
    }

    notFound = () => <h1><Localization>Not Found</Localization></h1>

    newArticlePage = () => <h1><Localization>New Article Page</Localization></h1>

    handleUserChange = ev => {
        if (ev.target.value.length > 10) return this.setState({
            username: ''
        })

        this.setState({
            username: ev.target.value
        })
    }

    switchLanguage = lang => ev => {
        console.log('clicked', 'lang', lang);
        this.setState({ language: lang })
    }
}

export default App