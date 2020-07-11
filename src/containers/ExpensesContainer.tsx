import React from 'react'

import { useExpenses } from '../hooks'

export const ExpensesContainer = () => {
  const { expenses } = useExpenses()

  return (
    <>
      {expenses.map(({ id, description, category, amount }) => (
        <fieldset key={id} style={{ marginBottom: 0 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: 8
            }}
          >
            <h4 style={{ margin: 0 }}>{description}</h4>
            <p
              style={{ textAlign: 'right', margin: 0, fontFamily: 'monospace' }}
            >
              {amount}
            </p>
          </div>
          <code>{category || 'None?'}</code> &mdash; <small>2020-06-24</small>
        </fieldset>
      ))}
    </>
  )
}

ExpensesContainer.displayName = 'ExpensesContainer'
