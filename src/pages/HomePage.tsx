import React, { FC } from 'react'

import { ExpensesContainer, ExpenseFormContainer } from '../containers'
import { PageHeader, PageFooter } from '../shared-components'

export const HomePage: FC = () => {
  return (
    <main>
      <PageHeader title="Dashboard" />
      <br />
      <ExpensesContainer />
      <br />
      <ExpenseFormContainer />
      <br />
      <PageFooter />
    </main>
  )
}

HomePage.displayName = 'HomePage'
