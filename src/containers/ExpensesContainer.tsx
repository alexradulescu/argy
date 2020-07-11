import React, { useState, useEffect } from 'react'

import { database } from '../firebase'

export const ExpensesContainer = () => {
  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    const expensesConnection = database
      .collection('expenses')
      // .where('date', '>', '2020-06-27')
      .onSnapshot(snapshot => {
        const fetchedExpenses = snapshot.docs.map(document => ({
          id: document.id,
          ...document.data()
        }))
        setExpenses(fetchedExpenses)
      })
    return () => {
      expensesConnection()
    }
  }, [])

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
