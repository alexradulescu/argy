import React, { FC } from 'react'

import { CategoriesContainer, CategoryFormContainer } from '../containers'
import { PageHeader, PageFooter } from '../shared-components'

export const CategoriesPage: FC = () => {
  return (
    <main>
      <PageHeader title="Categories" />
      <br />
      <CategoriesContainer />
      <br />
      <CategoryFormContainer />
      <br />
      <PageFooter />
    </main>
  )
}

CategoriesPage.displayName = 'CategoriesPage'
