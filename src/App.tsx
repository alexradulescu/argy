import React, { FC, useMemo } from 'react'
import Box from '@material-ui/core/Box'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { ExpensesContainer, ExpenseFormContainer } from './containers'

export const App: FC = () => {
  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: 'dark'
        }
      }),
    []
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        display="flex"
        flexDirection="column"
        style={{ maxWidth: 960, width: '90%', margin: 'auto' }}
      >
        <h1>Dashboard</h1>
        <ExpensesContainer />
        <ExpenseFormContainer />
      </Box>
    </ThemeProvider>
  )
}
