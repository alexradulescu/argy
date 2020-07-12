import React from 'react'

import { useExpenses } from '../hooks'

export const ExpensesContainer = () => {
  const { expenses, deleteExpense } = useExpenses()

  return (
    <>
      {expenses.map(({ id, description, category, amount, date }) => (
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
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: 8
            }}
          >
            <span>
              <code>{category || 'None?'}</code> &mdash;{' '}
              <small>{date || '??'}</small>
            </span>
            <button onClick={() => deleteExpense(id)}>X</button>
          </div>
        </fieldset>
      ))}
    </>
  )
}

ExpensesContainer.displayName = 'ExpensesContainer'
