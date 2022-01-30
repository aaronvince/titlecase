import Head from 'next/head'
import styled, { createGlobalStyle } from 'styled-components'
import useWindowSize from '../hooks/use-window-size'

import { Background } from '../components/background'
import { InputBox } from '../components/input-box'

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    
 
  @media (prefers-color-scheme: dark) {
    --colour1: red;
    --colour2: green;
    --colour3: blue; 

    --background-hue: 229;
    --background-saturation: 26%;
    --background-lightness: 8%;
    --background: hsl(var(--background-hue), var(--background-saturation), var(--background-lightness));
    --text: white;
    --secondary-text: hsl(229, 8%, 84%);
   
    --input-background: hsla(var(--background-hue), var(--background-saturation), var(--background-lightness), 0.4);
    --input-border: 1px solid hsla(var(--background-hue), var(--background-saturation), calc(var(--background-lightness) + 15%), 0.5);

    /* --input-box-shadow: 0px 16px 64px
    hsla(var(--background-hue), var(--background-saturation), var(--background-lightness), 0.45); */

    --input-box-shadow: 
      0 0.4px 1.6px hsla(var(--background-hue), var(--background-saturation), var(--background-lightness), 0.003),
      0 0.9px 3.4px hsla(var(--background-hue), var(--background-saturation), var(--background-lightness), 0.006),
      0 1.4px 5.8px hsla(var(--background-hue), var(--background-saturation), var(--background-lightness), 0.009),
      0 2.2px 8.7px hsla(var(--background-hue), var(--background-saturation), var(--background-lightness), 0.014),
      0 3.1px 12.5px hsla(var(--background-hue), var(--background-saturation), var(--background-lightness), 0.02),
      0 4.4px 17.7px hsla(var(--background-hue), var(--background-saturation), var(--background-lightness), 0.028),
      0 6.3px 25.1px hsla(var(--background-hue), var(--background-saturation), var(--background-lightness), 0.04),
      0 9.1px 36.5px hsla(var(--background-hue), var(--background-saturation), var(--background-lightness), 0.056),
      0 14.1px 56.3px hsla(var(--background-hue), var(--background-saturation), var(--background-lightness), 0.084),
      0 25px 100px hsla(var(--background-hue), var(--background-saturation), var(--background-lightness), 0.15)
      ;



    @supports (color: color(display-p3 1 1 1 / 1)) {
      --colour1: color(display-p3 1 0 0);
      --colour2: color(display-p3 0 1 0);
      --colour3: color(display-p3 0 0 1);
    }
  }

  @media (prefers-color-scheme: light) {
    --colour1: cyan;
    --colour2: magenta;
    --colour3: yellow; 

    --background-hue: 49;
    --background-saturation: 8%;
    --background-lightness: 92%;
    --background: hsl(var(--background-hue), var(--background-saturation), var(--background-lightness));
    --text: #555;
    --text: black;
    --secondary-text: hsl(49, 11%, 32%);
    
    --input-background: hsla(var(--background-hue), var(--background-saturation), var(--background-lightness), 0.4);
    --input-border: 1px solid hsla(var(--background-hue), var(--background-saturation), calc(var(--background-lightness) + 15%), 0.7);
    
    --input-box-shadow: 0px 8px 32px
    hsla(0, 0%, calc(100% - var(--background-lightness)), 0.05);

    --input-box-shadow: 
      0 0.4px 1.6px hsla(var(--background-hue), var(--background-saturation), calc(100% - var(--background-lightness)), 0.001),
      0 0.9px 3.4px hsla(var(--background-hue), var(--background-saturation), calc(100% - var(--background-lightness)), 0.002),
      0 1.4px 5.8px hsla(var(--background-hue), var(--background-saturation), calc(100% - var(--background-lightness)), 0.004),
      0 2.2px 8.7px hsla(var(--background-hue), var(--background-saturation), calc(100% - var(--background-lightness)), 0.006),
      0 3.1px 12.5px hsla(var(--background-hue), var(--background-saturation), calc(100% - var(--background-lightness)), 0.008),
      0 4.4px 17.7px hsla(var(--background-hue), var(--background-saturation), calc(100% - var(--background-lightness)), 0.01),
      0 6.3px 25.1px hsla(var(--background-hue), var(--background-saturation), calc(100% - var(--background-lightness)), 0.012),
      0 9.1px 36.5px hsla(var(--background-hue), var(--background-saturation), calc(100% - var(--background-lightness)), 0.015),
      0 14.1px 56.3px hsla(var(--background-hue), var(--background-saturation), calc(100% - var(--background-lightness)), 0.018),
      0 25px 100px hsla(var(--background-hue), var(--background-saturation), calc(100% - var(--background-lightness)), 0.02)
      ;

    @supports (color: color(display-p3 1 1 1 / 1)) {
      --colour1: color(display-p3 0 1 1);
      --colour2: color(display-p3 1 0 1);
      --colour3: color(display-p3 1 1 0);
    }
  }

  background: var(--background); 
  color: var(--text);
 }
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
    scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`

type PageProps = {
  width: number
  height: number
}

const Page = styled.main<PageProps>`
  height: ${(props) => props.height ?? '100vh'};
  /* background: radial-gradient(
    circle at 100% 100%,
    hsl(0 100% 50% / 100) 0,
    hsl(0 100% 50% / 0) 100%
  ); */

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  & > * {
    grid-column: 1;
    grid-row: 1;
  }

  & > * {
    z-index: 1;
  }

  & > h1 {
    place-self: top left;
    width: min-content;
    height: min-content;

    font-size: x-large;
    margin-top: 16px;
    margin-left: 24px;
  }

  & > :nth-child(2) {
    place-self: center center;
  }

  & > :last-child {
    z-index: 0;
  }
`

const Footer = styled.footer`
  place-self: end center;
  margin-block-end: 0.125rem;
  font-size: small;

  a {
    color: var(--text);
    border-bottom: 1px solid var(--secondary-text);
    text-decoration: none;
  }

  @media screen and (min-width: 768px) {
    margin-block-end: 1rem;
  }
`

export default function Home() {
  const { width, height } = useWindowSize()

  return (
    <Page width={width} height={height}>
      <GlobalStyle />
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width' />

        <title>Titlecase.me</title>

        <link rel='icon' href='/favicon.ico' />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <meta lang='en-CA' />
        <meta name='color-scheme' content='dark light' />
        <meta name='author' content='Aaron Vince @_aaronvince' />

        <meta
          name='description'
          content='Titlecase.me capitalizes headlines, titles, and the rest in a standardized way.'
        />
        <meta property='og:title' content='Titlecase.me' />
        <meta
          property='og:description'
          content='Titlecase.me capitalizes headlines, titles, and the rest in a standardized way.'
        />
        <meta
          property='og:image'
          content='/og-titlecase-logo.jpg'
        />
        <meta property='og:image:alt' content='The black coloured titlecase dot me logotype on a white background.' />
        <meta property='og:locale' content='en_CA' />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='og:url' content='https://www.titlecase.me/' />
        <link rel='canonical' href='https://www.titlecase.me/' />

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='icon' href='/favicon.ico' />
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#33c1b1' />
        <meta name='msapplication-TileColor' content='#33c1b1' />
        <meta name='theme-color' content='#ffffff' />

      </Head>

      <h1>Titlecase.me</h1>
      <InputBox />

      {/* camelCase
          capitalCase
          constantCase
          dotCase
          headerCase
          noCase
          paramCase
          pascalCase
          pathCase
          sentenceCase
          snakeCase

          https://github.com/blakeembrey/change-case
          

          Todo: https://medium.com/a-layman/turn-the-next-js-website-to-pwa-with-workbox-part-1-web-app-manifest-and-caching-offline-support-e6d94330b8f2
          */}

      <Footer>Made with ❤️ by <a href="https://aaronvince.com"> Aaron Vince</a></Footer>
      <Background width={width} height={height} />
    </Page>
  )
}
