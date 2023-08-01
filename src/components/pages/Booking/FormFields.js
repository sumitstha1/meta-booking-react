import React from 'react'

const FormFields = ({ children, label, htmlFor, error, message }) => {
  return (
    <div className='form-data'>
      <label htmlFor={htmlFor}>{label}</label>
      {children}

      {error && message ? <p>{message}</p> : null}
    </div>
  )
}

export default FormFields
