import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const PageNotFound = () => {
    const err = useRouteError();
  return (
    <div className="error-container">
        <h1>{err.status}</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        {/* <p>{err.error.message}</p> */}
        <Link to="/">Go back to home</Link>
    </div>
  )
}

export default PageNotFound