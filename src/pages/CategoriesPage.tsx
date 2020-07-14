import React, { FC } from 'react'

import { CategoriesContainer, CategoryFormContainer } from '../containers'
import { PageHeader } from '../shared-components'

export const CategoriesPage: FC = () => {
  return (
    <main>
      <PageHeader title="Categories" />
      <br />
      <CategoriesContainer />
      <br />
      <CategoryFormContainer />
    </main>
  )
}

CategoriesPage.displayName = 'CategoriesPage'
