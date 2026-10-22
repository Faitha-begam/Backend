import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NameProvider from './provider/NameProvider.jsx'

createRoot(document.getElementById('root')).render(
  <NameProvider>
    <App />
  </NameProvider>
    
 
)
