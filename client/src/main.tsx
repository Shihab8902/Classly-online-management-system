import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RootRoute from './routes/RootRoute'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import { store } from '../src/redux/store';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <RootRoute />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
