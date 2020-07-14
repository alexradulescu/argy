import React, { FC } from 'react'

import { useIncomes } from '../hooks'

export const IncomesContainer: FC = () => {
  const { incomes, deleteIncome } = useIncomes()

  return (
    <fieldset>
      {incomes.map(({ id, description, amount, date }) => (
        <dl key={id}>
          <dt>
            <h4 style={{ margin: 0 }}>{description}</h4>
            <span>
              <small>{date || '??'}</small>
            </span>
          </dt>
          <dd>
            <p style={{ margin: 0, fontFamily: 'monospace' }}>{amount}</p>
            <code onClick={() => deleteIncome(id)}>X</code>
          </dd>
        </dl>
      ))}
    </fieldset>
  )
}

IncomesContainer.displayName = 'IncomesContainer'
