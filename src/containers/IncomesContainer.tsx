import React from 'react'

import { useIncomes } from '../hooks'

export const IncomesContainer = () => {
  const { incomes, deleteIncome } = useIncomes()

  return (
    <>
      {incomes.map(({ id, description, amount, date }) => (
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
              <small>{date || '??'}</small>
            </span>
            <button onClick={() => deleteIncome(id)}>X</button>
          </div>
        </fieldset>
      ))}
    </>
  )
}

IncomesContainer.displayName = 'IncomesContainer'
