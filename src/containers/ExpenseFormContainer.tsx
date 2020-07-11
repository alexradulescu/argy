import React, { FC, useState } from 'react'

import { useExpenses, useCategories } from '../hooks'

export const ExpenseFormContainer: FC = () => {
  const { submitExpense } = useExpenses()
  const { categories } = useCategories()
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
    submitExpense(expense)
    clearForm()
  }

  return (
    <form style={{ marginTop: 16 }} onSubmit={onSubmit}>
      <fieldset>
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
            {categories.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Add Expense</button>
      </fieldset>
    </form>
  )
}

ExpenseFormContainer.displayName = 'ExpenseFormContainer'
