import React from 'react'
import './index.css'
import { CgUnavailable } from 'react-icons/cg'

const PageNotAvailable = () => {
  return (
    <div className='container page-not-available'>
      <CgUnavailable />
      <h2>Sorry! This page is currently unavailable</h2>
    </div>
  )
}

export default PageNotAvailable
