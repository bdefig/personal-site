import { Theme } from 'theme-ui';

export const colors = {
  gray1: "#333333",
  white: "#ffffff",
  bluePalette: "#2979ff",
  blueLight: "#75a7ff",
  blueDark: "#004ecb",
  coral: "#f09595"
}

const siteTheme: Theme = {
	colors: {
    text: colors.gray1,
    background: colors.white,
    primary: colors.bluePalette,
    secondary: colors.coral,
  },
	fonts: {
    heading: "Nunito, system-ui, sans-serif",
    body: "Lato, system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  styles: {
    // The keys used here reference elements in MDX.
    h1: {
      fontFamily: "heading",
      marginBottom: 0,
    },
    h2: {
      fontFamily: "heading",
      marginBottom: 0,
    },
    h3: {
      fontFamily: "heading",
      marginBottom: 0,
    },
    h4: {
      fontFamily: "heading",
      marginBottom: 0,
    },
    h5: {
      fontFamily: "heading",
      marginBottom: 0,
    },
    h6: {
      fontFamily: "heading",
      marginBottom: 0,
    },
    p: {
      fontFamily: "body"
    },
    a: {
      color: colors.bluePalette,
      '&:hover': {
        color: colors.blueDark
      },
      '&:active': {
        color: colors.blueLight
      },
      textDecoration: "none"
    },
  }
}

export default siteTheme;