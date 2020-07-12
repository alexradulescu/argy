import { useEffect, useState } from 'react'

import { database } from '../firebase'

export const useIncomes = (
  year = new Date().toISOString().substring(0, 4),
  month = new Date().toISOString().substring(5, 7)
) => {
  const [incomes, setIncomes] = useState([])

  useEffect(() => {
    const incomesConnection = database
      .collection('incomes')
      .where('date', '>=', `${year}-${month}-01`)
      .where('date', '<=', `${year}-${month}-31`)
      .onSnapshot(snapshot => {
        const fetchedIncomes = snapshot.docs.map(document => ({
          id: document.id,
          ...document.data()
        }))
        setIncomes(fetchedIncomes)
      })
    return () => {
      incomesConnection()
    }
  }, [month, year])

  const submitIncome = async income => {
    database.collection('incomes').add(income)
  }

  const deleteIncome = async (incomeId: string) => {
    try {
      await database
        .collection('incomes')
        .doc(incomeId)
        .delete()
    } catch (error) {
      alert(error)
    }
  }

  return { incomes, submitIncome, deleteIncome }
}
