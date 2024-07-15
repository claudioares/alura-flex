import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MainRouter } from './routers/router.tsx'
import ContextProvider from './contextApi/contextApi.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>,
)
