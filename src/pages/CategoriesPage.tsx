import React, { FC } from 'react'

import { CategoriesContainer, CategoryFormContainer } from '../containers'

export const CategoriesPage: FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 960,
        width: '90%',
        margin: 'auto'
      }}
    >
      <h1>Dashboard</h1>
      <CategoriesContainer />
      <CategoryFormContainer />
    </div>
  )
}

CategoriesPage.displayName = 'CategoriesPage'
