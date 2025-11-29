import React from 'react'

export default function ErrorMessage({error}) {
  return (
    <p style={{color: 'red', textAlign: 'center'}}>{error}</p>
  )
}
