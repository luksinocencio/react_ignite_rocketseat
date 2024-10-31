import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './App.jsx'

// DOM - Document Object Model
// Representação do HTML em forma de objetos

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App/>
	</StrictMode>,
)
