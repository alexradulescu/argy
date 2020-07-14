import React, { FC } from 'react'

import { useExpenses } from '../hooks'

export const ExpensesContainer: FC = () => {
  const { expenses, deleteExpense } = useExpenses()

  return (
    <fieldset>
      {expenses.map(({ id, description, category, amount, date }) => (
        <>
          <dl key={id} style={{ marginBottom: 0 }}>
            <dt>
              <h4 style={{ margin: 0 }}>{description}</h4>
              <span>
                <code>{category || 'None?'}</code> &mdash;{' '}
                <small>{date || '??'}</small>
              </span>
            </dt>
            <dd>
              <p style={{ margin: 0, fontFamily: 'monospace' }}>
                <strong>{amount}</strong>
              </p>
              <code onClick={() => deleteExpense(id)}>X</code>
            </dd>
          </dl>
          <br />
        </>
      ))}
    </fieldset>
  )
}

ExpensesContainer.displayName = 'ExpensesContainer'
