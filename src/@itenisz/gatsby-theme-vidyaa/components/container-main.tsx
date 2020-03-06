import React from 'react'
import { BoxMdx, Container, ContAbout, ContPrices, ContContact } from "@itenisz/gatsby-theme-vidyaa/src/components/container-main"

const ContAboutShadow = ({ ...props }) => <ContAbout {...props} needWelcome={false} />

export { BoxMdx, Container, ContAboutShadow as ContAbout, ContPrices, ContContact }
