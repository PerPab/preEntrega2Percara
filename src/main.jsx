import React from 'react'
import ReactDOM from 'react-dom/client'
import ItemRoot from './routes/ItemRoot'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './routes/App'
import Error from './componentes/Error/Error'

import './main.css'
import ItemDetailContainer from './routes/ItemDetailContainer'


const router = createBrowserRouter([

  {
    path: "/",
    element: <App/>
  },
  {
    path: "/category/:id",
    element: <App />
  },
  {
    path: "/item/:id",
    element: <ItemDetailContainer />
  },
  {
    path: "/cart",
    element: <div>Hola mundo</div>
  },
  {
    path: "/checkout",
    element: <div>Hola mundo</div>
  },
  


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)