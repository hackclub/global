import * as React from 'react'
import NextApp from 'next/app'
import '@hackclub/theme/fonts/reg-bold.css'
import '../styles/main.css'
import theme from '@hackclub/theme'
import { ThemeProvider, Container, Heading, Box } from 'theme-ui'
import ColorSwitcher from '../components/color-switcher'
import GitHub from '../components/github'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <ColorSwitcher />
        <GitHub />
        <nav>
          <Container variant="copy">
            <Heading>
              <a href="https://hackclub.com/?ref=es">Hack Club</a>
            </Heading>
          </Container>
        </nav>
        <main>
          <Component {...pageProps} />
        </main>
        <Box as="footer" bg="darker">
          <Container variant="copy">
            <h2>Hack Club HQ</h2>
            <p>
              15 Falls Rd. 
              <br /> Shelburne, VT, 05482
            </p>
            <p>
              EIN: 81-2908499 <br />
              <a href="tel:1-855-625-HACK">1-855-625-HACK</a>
            </p>
          </Container>
        </Box>
      </ThemeProvider>
    )
  }
}
