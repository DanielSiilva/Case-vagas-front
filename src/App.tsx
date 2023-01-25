import {BrowserRouter} from 'react-router-dom'
import {ThemeProvider } from 'styled-components'
import { Router } from './Router/Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/Themes/default'


export function App (){


  return(
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
        <GlobalStyle/>
      </BrowserRouter>
    </ThemeProvider>
    
  )
}