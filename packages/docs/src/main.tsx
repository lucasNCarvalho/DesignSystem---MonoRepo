import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// "scripts": {
//   "dev": "vite",
//   "build": "tsc -b && vite build",
//   "lint": "eslint .",
//   "preview": "vite preview",
//   "storybook": "storybook dev -p 6006",
//   "build-storybook": "storybook build"
// },