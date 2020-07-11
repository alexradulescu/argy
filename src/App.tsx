import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { CategoriesPage, HomePage } from './pages'

export const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/categories">
          <CategoriesPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </Router>
  )
}
