import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Root from '../components/Root'
import Home from '../components/Home'
import About from '../components/About'
import ErrorPage from '../components/ErrorPage'
import Shop from '../components/Shop'
import { productsAndCartData } from '../loaders/getProducts&CartData'
import Cart from '../components/Cart'

const router = createBrowserRouter([
    {
      path: '/',
      element: <Root/>,
      errorElement: <ErrorPage/>,
      loader: productsAndCartData,
      children: [
        {
            path: '/',
            element: <Home/> 
        },
        {
            path: 'home',
            element: <Home/>
        },
        {
            path: 'shop',
            element: <Shop/>
        },
        {
            path: 'cart',
            element: <Cart/>
        },
        {
            path: 'about',
            element: <About/>
        }
      ]
    }
  ])


export default router;