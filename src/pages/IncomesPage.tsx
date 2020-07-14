import React, { FC } from 'react'

import { IncomesContainer, ExpenseFormContainer } from '../containers'
import { PageHeader, PageFooter } from '../shared-components'

export const IncomesPage: FC = () => {
  return (
    <main>
      <PageHeader title="Incomes" />
      <br />
      <IncomesContainer />
      <br />
      <ExpenseFormContainer />
      <br />
      <PageFooter />
    </main>
  )
}

IncomesPage.displayName = 'IncomesPage'
