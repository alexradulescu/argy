import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

export const Navigation = () => (
  <nav
    style={{
      gridTemplateColumns: 'auto auto',
      display: 'grid',
      gridGap: 16
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
  </nav>
)

Navigation.displayName = 'Navigation'
