import React, { FC } from 'react'

import { ExpensesContainer, ExpenseFormContainer } from './containers'

export const App: FC = () => {
  return (
    <div className="vh-100 vw-100 d-flex bg-dark">
      <main className="container">
        <h1 className="text-light text-center">Welcome to Argy</h1>
        <ExpensesContainer />
        <ExpenseFormContainer />
      </main>
    </div>
  )
}
