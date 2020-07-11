import React, { FC, useState } from 'react'

import { database } from '../firebase'

export const ExpenseFormContainer: FC = () => {
  const [expense, setExpense] = useState({
    description: '',
    amount: '',
    category: ''
  })

  const onChangeExpense = (e: React.InputEvent) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value
    })
  }

  const clearForm = () => {
    setExpense({
      description: '',
      amount: '',
      category: ''
    })
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    database.collection('expenses').add(expense)
    clearForm()
  }

  return (
    <form style={{ padding: 16, marginTop: 16 }} onSubmit={onSubmit}>
      <h3 style={{ margin: '0 0 16px 0' }}>Add Expense</h3>
      <label>
        <input
          id="outlined-basic"
          placeholder="Description"
          name="description"
          type="text"
          value={expense.description}
          onChange={onChangeExpense}
          required
        />
      </label>
      <label>
        <input
          id="outlined-basic"
          placeholder="Amount"
          name="amount"
          type="number"
          value={expense.amount}
          onChange={onChangeExpense}
          required
        />
      </label>
      <label>
        <p>Category</p>
        <select
          name="category"
          value={expense.category}
          onChange={onChangeExpense}
          placeholder="Category"
        >
          <option value="" disabled>
            None
          </option>
          <option value="rentMortgage">Rent/Mortgage</option>
          <option value="food">Food</option>
          <option value="utilitiesBills">Utilities/Bills</option>
        </select>
      </label>
      <button type="submit">Add Expense</button>
    </form>
  )
}

ExpenseFormContainer.displayName = 'ExpenseFormContainer'
