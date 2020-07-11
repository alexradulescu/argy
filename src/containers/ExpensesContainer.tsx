import React from 'react'

import { useExpenses } from '../hooks'

export const ExpensesContainer = () => {
  const { expenses } = useExpenses()

  return (
    <table>
      <thead>
        <tr>
          <td>Date</td>
          <td>Description</td>
          <td>Category</td>
          <td align="right">Amount</td>
        </tr>
      </thead>
      <tbody>
        {expenses.map(({ id, description, category, amount }) => (
          <tr key={id}>
            <td>2020-06-24</td>
            <td>{description}</td>
            <td>{category || 'None?'}</td>
            <td align="right">{amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

ExpensesContainer.displayName = 'ExpensesContainer'
