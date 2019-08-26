import App, { Container } from "next/app"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import Header from "../components/Header"
import Footer from "../components/Footer"

const globalStyles = css`
  :root {
    --color-black: #252630;
    --color-charcoal: #444444;
    --color-gray: #c6bdbd;
    --color-red: #ee3534;
    --color-blue: #46c8ed;
    --color-orange: #ffa032;
    --color-off-white: #f5f5f5;
    --color-white: #ffffff;
    --color-pink: #fff0f5;
    --color-coral: #f08080;

    --color-navy: #193958;
    --color-red: #d5545b;
    --color-light-blue: #269adb;
    --color-dark-blue: #0a2642;

    --color-primary: #6580be;
    --color-secondary: var(--color-light-blue);
    --color-dark-background: var(--color-navy);
    --color-text: #18223a;

    --color-error-bg: var(--color-pink);
    --color-error-fg: var(--color-coral);

    --metric-gutter: 1rem;
    --metric-gutter--double: 2rem;
    --metric-space: 1rem;
    --metric-radius: 0.4rem;

    /* Perfect Fourths */
    --type-size--small: 0.75rem;
    --type-size--base: 1rem;
    --type-size--heading-sm: 1.333rem;
    --type-size--heading-md: 1.777rem;
    --type-size--heading-lg: 2.369rem;
    --type-size--heading-xlg: 3.157rem;

    --type-size--base: 16px;

    --type-base-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";

    --metric-transition-bezier: cubic-bezier(0.55, 0, 0.1, 1);
  }

  html {
    box-sizing: border-box;
    font-family: var(--type-base-family);
    font-weight: 400;
    font-size: var(--type-size--base);
    text-rendering: optimizeLegibility;
    background: var(--color-off-white);
    color: var(--color-text);
    text-shadow: 0 2px 0 rgba(0, 0, 0, 0.04);
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    min-height: 100vh;
    height: 100vh;
    color: var(--color-text);
    line-height: 1.5;
    margin: 0;
    font-size: 1rem;
    background-color: #f2f4f8;
    background-image: url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%236580be' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E");
  }

  h1,
  h2,
  h3,
  h4 {
    margin: 1.414rem 0 0.5rem;
    font-weight: inherit;
    line-height: 1.2;
  }

  h1 {
    margin-top: 0;
    font-size: var(--type-size--heading-xlg);
  }

  h2 {
    font-size: var(--type-size--heading-lg);
  }

  h3 {
    font-size: var(--type-size--heading-md);
  }

  h4 {
    font-size: var(--type-size--heading-sm);
  }

  small {
    font-size: var(--type-size--small);
  }

  p {
    margin: 0;
    margin-bottom: 1.3rem;
  }

  hr {
    margin: var(--metric-space) auto;
    border: none;
    border-top: 1px solid #dfe4f1;
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
    display: inline-flex;

    svg {
      width: 12px;
      margin: 0 0.3rem;
    }
  }

  #__next {
    min-height: 100%;
  }
`

const Page = styled.div`
  padding: calc(var(--metric-space) * 2) 0;
  min-height: calc(100vh - 7rem);
  display: grid;
  grid-template-columns:
    minmax(1.2rem, 1fr)
    minmax(auto, 57ch)
    minmax(1.2rem, 1fr);
`

const Column = styled.div`
  grid-column: 2;
`

export default class SightWordsApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Global styles={globalStyles} />
        <Header />
        <Page>
          <Column>
            <Component {...pageProps} />
          </Column>
        </Page>
        <Footer />
      </Container>
    )
  }
}
