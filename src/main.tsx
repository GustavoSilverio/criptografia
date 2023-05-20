import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from './components/Layout/Layout.tsx'
import './styles/global.css'
import { ThemeProvider } from '@emotion/react'
import { theme } from './styles/theme.ts'
import { CssBaseline } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
				<Layout />
				<CssBaseline />
		</ThemeProvider>
	</React.StrictMode>
)
