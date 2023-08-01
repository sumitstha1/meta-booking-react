import React from 'react'
import './index.css'
import { TbError404 } from 'react-icons/tb'

const PageNotFound = () => {
  return (
    <div className='container page-not-found'>
      <TbError404 />
      <h2>Oops! Page not Found</h2>
    </div>
  )
}

export default PageNotFound
