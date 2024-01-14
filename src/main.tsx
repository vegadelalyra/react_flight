import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Components/Router'
import './styles/main.sass'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
