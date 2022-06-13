import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AuthContextProvider } from './components/authcontext'
import './index.css'
import { store } from "./refactor/todo/store"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
    <Provider store={store}>
    <App />
    </Provider>
    </AuthContextProvider>
    </BrowserRouter>
    
  </React.StrictMode>
)
