import React from 'react'

import { useCategories } from '../hooks'

export const CategoriesContainer = () => {
  const { categories } = useCategories()

  return (
    <table>
      <thead>
        <tr>
          <td>Title</td>
          <td align="right">Treshold</td>
        </tr>
      </thead>
      <tbody>
        {categories.map(({ id, title, treshold }) => (
          <tr key={id}>
            <td>{title}</td>
            <td align="right">{treshold || '--'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

CategoriesContainer.displayName = 'CategoriesContainer'
