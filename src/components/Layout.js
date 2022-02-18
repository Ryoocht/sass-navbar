import React from 'react'
import classes from './Layout.module.scss'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <>
        <Header />
        <div className={classes.container}>{children}</div>
    </>
  )
}

export default Layout