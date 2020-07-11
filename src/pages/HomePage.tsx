import React, { FC } from 'react'

import { ExpensesContainer, ExpenseFormContainer } from '../containers'
import { PageHeader } from '../shared-components'

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
      <PageHeader title="Dashboard" />
      <ExpensesContainer />
      <ExpenseFormContainer />
    </div>
  )
}

HomePage.displayName = 'HomePage'
