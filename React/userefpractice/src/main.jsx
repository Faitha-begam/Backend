import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NameProvider from './provider/NameProvider.jsx'
import ThemeProvider from './provider/ThemeProvider.jsx'
import AuthProvider from './provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  
  <NameProvider>
  <ThemeProvider>
    <AuthProvider>
    <App />
    </AuthProvider>
  </ThemeProvider>
  </NameProvider>
 
)
