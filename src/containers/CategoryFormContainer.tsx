import React, { FC, useState, ChangeEvent } from 'react'

import { useCategories } from '../hooks'

export const CategoryFormContainer: FC = () => {
  const [category, setCategory] = useState({
    label: '',
    treshold: ''
  })

  const { submitCategory } = useCategories()

  const onChangeCategory = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    submitCategory({
      ...category,
      value: category.label.toLowerCase().replace(/\s/g, '_')
    })
    clearForm()
  }

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <legend>Add Category</legend>
        <label>
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
          <input
            id="outlined-basic"
            placeholder="Max Amount"
            name="treshold"
            type="number"
            value={category.treshold}
            onChange={onChangeCategory}
            required
          />
        </label>
        <label>
          <button type="submit">Add Category</button>
        </label>
      </fieldset>
    </form>
  )
}

CategoryFormContainer.displayName = 'CategoryFormContainer'
