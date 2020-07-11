import React, { FC, useState } from 'react'

import { database } from '../firebase'

export const CategoryFormContainer: FC = () => {
  const [category, setCategory] = useState({
    title: '',
    treshold: ''
  })

  const onChangeCategory = (e: React.InputEvent) => {
    setCategory({
      ...category,
      [e.target.name]: e.target.value
    })
  }

  const clearForm = () => {
    setCategory({
      title: '',
      treshold: ''
    })
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    database.collection('categories').add(category)
    clearForm()
  }

  return (
    <form style={{ padding: 16, marginTop: 16 }} onSubmit={onSubmit}>
      <h3 style={{ margin: '0 0 16px 0' }}>Add Expense</h3>
      <label>
        <p>Title</p>
        <input
          id="outlined-basic"
          placeholder="Title"
          name="title"
          type="text"
          value={category.title}
          onChange={onChangeCategory}
          required
        />
      </label>
      <label>
        <p>Title</p>
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
