import React, { FC, useState } from 'react'

import { useCategories } from '../hooks'

export const CategoryFormContainer: FC = () => {
  const [category, setCategory] = useState({
    label: '',
    treshold: ''
  })

  const { submitCategory } = useCategories()

  const onChangeCategory = (e: React.InputEvent) => {
    setCategory({
      ...category,
      [e.target.name]: e.target.value
    })
  }

  const clearForm = () => {
    setCategory({
      label: '',
      treshold: ''
    })
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    submitCategory({
      ...category,
      value: category.label.toLowerCase().replace(/\s/g, '_')
    })
    clearForm()
  }

  return (
    <form style={{ marginTop: 16 }} onSubmit={onSubmit}>
      <h3 style={{ margin: '0 0 16px 0' }}>Add Expense</h3>
      <label>
        <p>Title</p>
        <input
          id="outlined-basic"
          placeholder="Title"
          name="label"
          type="text"
          value={category.label}
          onChange={onChangeCategory}
          required
        />
      </label>
      <label>
        <p>Amount</p>
        <input
          id="outlined-basic"
          placeholder="Amount"
          name="treshold"
          type="number"
          value={category.treshold}
          onChange={onChangeCategory}
          required
        />
      </label>

      <button type="submit">Add Category</button>
    </form>
  )
}

CategoryFormContainer.displayName = 'CategoryFormContainer'
