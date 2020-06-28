import React, { FC, useState } from 'react'
import {
  Button,
  TextField,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Paper,
  Typography
} from '@material-ui/core'

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
    <Paper
      component="form"
      style={{ padding: 16, marginTop: 16 }}
      onSubmit={onSubmit}
    >
      <FormControl margin="dense" fullWidth>
        <h3 style={{ margin: '0 0 16px 0' }}>Add Expense</h3>
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          name="description"
          type="text"
          value={expense.description}
          onChange={onChangeExpense}
          size="small"
          required
        />
      </FormControl>
      <FormControl margin="dense" fullWidth>
        <TextField
          id="outlined-basic"
          label="Amount"
          variant="outlined"
          name="amount"
          type="number"
          value={expense.amount}
          onChange={onChangeExpense}
          size="small"
          required
        />
      </FormControl>
      <FormControl variant="outlined" fullWidth size="small" margin="dense">
        <InputLabel>Category</InputLabel>
        <Select
          name="category"
          value={expense.category}
          onChange={onChangeExpense}
          label="Category"
        >
          <MenuItem value="" disabled>
            <em>None</em>
          </MenuItem>
          <MenuItem value="rentMortgage">Rent/Mortgage</MenuItem>
          <MenuItem value="food">Food</MenuItem>
          <MenuItem value="utilitiesBills">Utilities/Bills</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="dense">
        <Button type="submit" variant="contained" color="primary" size="large">
          Add Expense
        </Button>
      </FormControl>
    </Paper>
  )
}

ExpenseFormContainer.displayName = 'ExpenseFormContainer'
