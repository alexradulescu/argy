import React, { FC, useState } from 'react'

import { useExpenses, useCategories, useIncomes } from '../hooks'

export const ExpenseFormContainer: FC = () => {
  const { submitExpense } = useExpenses()
  const { submitIncome } = useIncomes()
  const { categories } = useCategories()
  const [expense, setExpense] = useState({
    description: '',
    amount: '',
    category: '',
    date: new Date().toISOString().substring(0, 10)
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
      category: '',
      date: new Date().toISOString().substring(0, 10)
    })
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    submitExpense({
      ...expense,
      amount: Number(expense.amount)
    })
    clearForm()
  }

  const addIncome = (e: React.ButtonEvent) => {
    e.preventDefault()
    submitIncome({
      description: expense.description,
      amount: Number(expense.amount),
      date: expense.date
    })
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
          <select
            name="category"
            value={expense.category}
            onChange={onChangeExpense}
            placeholder="Category"
            required
          >
            <option value="" disabled>
              Choose the Category...
            </option>
            {categories.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label>
          <input
            type="date"
            name="date"
            value={expense.date}
            onChange={onChangeExpense}
            placeholder="date"
            required
          />
        </label>
        <button type="submit">Add Expense</button>
        <button onClick={addIncome}>Add Income</button>
      </fieldset>
    </form>
  )
}

ExpenseFormContainer.displayName = 'ExpenseFormContainer'
