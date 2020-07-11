// import { useState, useEffect } from 'react'

import { useCategories } from './useCategories'
import { useExpenses } from './useExpenses'

export const useOverview = () => {
  const { categories } = useCategories()
  const { expenses } = useExpenses()

  const overview = categories.map(category => {
    return {
      ...category,
      spent: expenses
        .filter(expense => expense.category === category.value)
        .reduce((accumulator, item) => accumulator + Number(item.amount), 0)
    }
  })

  return { overview }
}
