import React, { FC } from 'react'

import { IncomesContainer, ExpenseFormContainer } from '../containers'
import { PageHeader } from '../shared-components'

export const IncomesPage: FC = () => {
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
      <PageHeader title="Incomes" />

      <IncomesContainer />
      <ExpenseFormContainer />
    </div>
  )
}

IncomesPage.displayName = 'IncomesPage'
