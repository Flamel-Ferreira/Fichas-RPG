import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GlocalStyle } from './styles/globalStyle.ts'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlocalStyle/>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
