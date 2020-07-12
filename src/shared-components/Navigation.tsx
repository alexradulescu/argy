import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

export const Navigation = () => (
  <nav
    style={{
      gridTemplateColumns: 'auto auto auto',
      display: 'grid',
      gridGap: 8
    }}
  >
    <NavLink
      exact
      activeStyle={{
        fontWeight: 'bold',
        textDecoration: 'underline'
      }}
      to="/"
    >
      Home
    </NavLink>
    <NavLink
      activeStyle={{
        fontWeight: 'bold',
        textDecoration: 'underline'
      }}
      to="/categories"
    >
      Categories
    </NavLink>
    <NavLink
      activeStyle={{
        fontWeight: 'bold',
        textDecoration: 'underline'
      }}
      to="/incomes"
    >
      Incomes
    </NavLink>
  </nav>
)

Navigation.displayName = 'Navigation'
