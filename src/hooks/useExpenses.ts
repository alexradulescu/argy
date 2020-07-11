import { useEffect, useState } from 'react'

import { database } from '../firebase'

export const useExpenses = () => {
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

  const submitExpense = async expense => {
    database.collection('expenses').add(expense)
  }

  return { expenses, submitExpense }
}
