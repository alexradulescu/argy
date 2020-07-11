import React, { FC } from 'react'

import { CategoriesContainer, CategoryFormContainer } from '../containers'
import { PageHeader } from '../shared-components'

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
      <PageHeader title="Categories" />

      <CategoriesContainer />
      <CategoryFormContainer />
    </div>
  )
}

CategoriesPage.displayName = 'CategoriesPage'
