import baseTheme from '@itenisz/gatsby-theme-vidyaa/src/gatsby-plugin-theme-ui/index'

const shadowedLogo = {
  logo: {
    inNavbar: {
      mt: `20px`,
      ml: 3,
      minWidth: 100,
      maxWidth: 150,
      display: [`none`, `block`],
      width: [`auto`, 150],
      filter: `invert(0) sepia(0) saturate(0) hue-rotate(0deg)`,
    },
    inHeader: {
      minWidth: 200,
      maxWidth: 400,
      width: [200, 300, 350, 400],
      filter: `invert(1) sepia(1) saturate(0) hue-rotate(0deg)`,
    },
  }
}

baseTheme.logo = shadowedLogo.logo

export default baseTheme
