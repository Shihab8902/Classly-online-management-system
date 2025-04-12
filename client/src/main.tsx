import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RootRoute from './routes/RootRoute'
import { BrowserRouter } from 'react-router'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <RootRoute />
    </BrowserRouter>
  </StrictMode>,
)
