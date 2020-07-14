import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

export const Navigation: FC = () => (
  <nav
    style={{
      gridTemplateColumns: 'auto auto auto',
      display: 'grid',
      gridGap: 4
    }}
  >
    <NavLink
      exact
      activeStyle={{
        fontWeight: 'bold'
      }}
      to="/"
    >
      Home
    </NavLink>
    <NavLink
      activeStyle={{
        fontWeight: 'bold'
      }}
      to="/categories"
    >
      Categories
    </NavLink>
    <NavLink
      activeStyle={{
        fontWeight: 'bold'
      }}
      to="/incomes"
    >
      Incomes
    </NavLink>
  </nav>
)

Navigation.displayName = 'Navigation'
