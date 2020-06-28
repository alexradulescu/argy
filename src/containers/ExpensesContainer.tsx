import React, { useState, useEffect } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

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
        console.log(fetchedExpenses)
      })
    return () => {
      expensesConnection()
    }
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Category</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map(expense => (
            <TableRow key={expense.id}>
              <TableCell>2020-06-24</TableCell>
              <TableCell>{expense.title}</TableCell>
              <TableCell>{expense.category || 'None?'}</TableCell>
              <TableCell align="right">{expense.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

ExpensesContainer.displayName = 'ExpensesContainer'
