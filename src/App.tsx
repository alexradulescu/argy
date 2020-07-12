import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { CategoriesPage, HomePage, IncomesPage } from './pages'

export const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/categories">
          <CategoriesPage />
        </Route>
        <Route path="/incomes">
          <IncomesPage />
        </Route>
      </Switch>
    </Router>
  )
}
