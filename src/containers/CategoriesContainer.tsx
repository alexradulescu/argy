import React, { useState, useEffect } from 'react'

import { database } from '../firebase'

export const CategoriesContainer = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const categoriesConnection = database
      .collection('categories')
      // .where('date', '>', '2020-06-27')
      .onSnapshot(snapshot => {
        const fetchedCategories = snapshot.docs.map(document => ({
          id: document.id,
          ...document.data()
        }))
        setCategories(fetchedCategories)
      })
    return () => {
      categoriesConnection()
    }
  }, [])

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
