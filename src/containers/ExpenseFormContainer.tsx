import React, { FC, useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import { database } from '../firebase'

export const ExpenseFormContainer: FC = () => {
  const [expense, setExpense] = useState({
    title: undefined,
    amount: undefined
  })

  const onChangeExpense = (e: React.InputEvent) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value
    })
  }

  const clearForm = () => {
    setExpense({
      title: undefined,
      amount: undefined
    })
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    database.collection('expenses').add(expense)
    clearForm()
  }

  return (
    <form onSubmit={onSubmit}>
      <TextField
        id="outlined-basic"
        label="Title"
        variant="outlined"
        name="title"
        type="text"
        value={expense.title}
        placeholder="Title"
        onChange={onChangeExpense}
        size="small"
        fullWidth
        margin="normal"
      />
      <TextField
        id="outlined-basic"
        label="Amount"
        variant="outlined"
        name="amount"
        type="number"
        value={expense.amount}
        placeholder="Amount"
        onChange={onChangeExpense}
        size="small"
        fullWidth
        margin="normal"
      />

      <Button type="submit" variant="contained" color="primary" size="large">
        Add Transaction
      </Button>
    </form>
  )
}

ExpenseFormContainer.displayName = 'ExpenseFormContainer'
