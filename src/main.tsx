import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from "./routes/index"


const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement as any).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>,
)
