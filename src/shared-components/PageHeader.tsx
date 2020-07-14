import React, { FC } from 'react'
import { Navigation } from './Navigation'

interface Props {
  title: string
}

export const PageHeader: FC<Props> = ({ title }) => (
  <header
    style={{
      display: 'flex',
      justifyContent: 'space-between'
    }}
  >
    <h2 style={{ margin: 0 }}>{title}</h2>
    <Navigation />
  </header>
)

PageHeader.displayName = 'PageHeader'
