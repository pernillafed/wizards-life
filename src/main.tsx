import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'theme-ui'
import App from './App'
import AuthContextProvider from './contexts/AuthContext'
import './index.css'
import { styleTheme } from './themes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthContextProvider>
                <ThemeProvider theme={styleTheme}>
                    <App />
                </ThemeProvider>
            </AuthContextProvider>
        </BrowserRouter>
    </React.StrictMode>
)
