import React, { FC, useMemo } from 'react'
import Box from '@material-ui/core/Box'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { ExpensesContainer, ExpenseFormContainer } from './containers'

export const App: FC = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light'
        }
      }),
    [prefersDarkMode]
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box display="flex" flexDirection="column">
        <main className="container">
          <h1 className="text-light text-center">Welcome to Argy</h1>
          <ExpensesContainer />
          <ExpenseFormContainer />
        </main>
      </Box>
    </ThemeProvider>
  )
}
