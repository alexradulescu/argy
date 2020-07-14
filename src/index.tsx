import React from 'react'
import { render } from 'react-dom'

import { App } from './App'
// import './assets/bootstrap.min.css'
// import './assets/avantui.min.css'
// import './assets/dark.standalone.css'
import './assets/light.standalone.css'

const rootElement = document.querySelector('#root')
render(<App />, rootElement)
