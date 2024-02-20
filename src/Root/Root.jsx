import React from 'react'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import router from '../Route/Router'

export default function Root() {
  return (
      <RouterProvider  router={router}/>
  )
}
    