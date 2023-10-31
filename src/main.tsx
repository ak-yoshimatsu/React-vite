import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'
import { RouterProvider } from 'react-router-dom'
import routing from './routes/routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routing} />
    {/* <App /> */}
  </React.StrictMode>,
)
