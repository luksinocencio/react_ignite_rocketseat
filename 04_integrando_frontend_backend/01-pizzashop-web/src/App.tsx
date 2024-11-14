import './global.css'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { router } from '@/routes'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <Toaster richColors position="top-right" />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
