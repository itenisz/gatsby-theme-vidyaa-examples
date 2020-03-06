import React from 'react'
import Navbar from "@itenisz/gatsby-theme-vidyaa/src/components/navbar"

export default  ({ children, ...props }) => <Navbar {...props} needNavbarLogo={false}>{children}</Navbar>
