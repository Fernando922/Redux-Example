import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'

import PostsList from './features/post/PostsList'
import AddPostForm from './features/post/AddPostForm'
import SinglePostPage from './features/post/SinglePostPage'
import EditPostPage from './features/post/EditPostForm'
import UsersList from './features/users/UsersList'
import NotificationsList from './features/notifications/NotificationsList'
import UserPage from './features/users/UserPage'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <AddPostForm />
                <PostsList />
              </>
            )}
          />
          <Route exact path="/posts/:postId" component={SinglePostPage} />
          <Route exact path="/editPost/:postId" component={EditPostPage} />
          <Route exact path="/users" component={UsersList} />
          <Route exact path="/users/:userId" component={UserPage} />
          <Route exact path="/notifications" component={NotificationsList} />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
