import React, { FC } from 'react'

import { IncomesContainer, ExpenseFormContainer } from '../containers'
import { PageHeader } from '../shared-components'

export const IncomesPage: FC = () => {
  return (
    <main>
      <PageHeader title="Incomes" />
      <br />
      <IncomesContainer />
      <br />
      <ExpenseFormContainer />
    </main>
  )
}

IncomesPage.displayName = 'IncomesPage'
