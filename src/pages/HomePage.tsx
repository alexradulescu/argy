import React, { FC } from 'react'

import { ExpensesContainer, ExpenseFormContainer } from '../containers'

export const HomePage: FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 960,
        width: '90%',
        margin: 'auto'
      }}
    >
      <h2>Dashboard</h2>
      <ExpensesContainer />
      <ExpenseFormContainer />
    </div>
  )
}

HomePage.displayName = 'HomePage'
