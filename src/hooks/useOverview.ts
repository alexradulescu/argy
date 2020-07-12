import { useCategories } from './useCategories'
import { useExpenses } from './useExpenses'
import { useIncomes } from './useIncomes'

export const useOverview = () => {
  const { categories } = useCategories()
  const { expenses } = useExpenses()
  const { incomes } = useIncomes()

  const overview = categories.map(category => {
    return {
      ...category,
      spent: expenses
        .filter(expense => expense.category === category.value)
        .reduce((accumulator, item) => accumulator + Number(item.amount), 0)
    }
  })

  const totalBalance =
    expenses.reduce(
      (accumulator, item) => (accumulator -= Number(item.amount)),
      0
    ) +
    incomes.reduce(
      (accumulator, item) => (accumulator += Number(item.amount)),
      0
    )

  return { overview, totalBalance }
}
