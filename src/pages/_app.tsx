import { createTheme, Customizer, Fabric, initializeIcons } from 'office-ui-fabric-react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import React from 'react';
import { NavSidebar } from '../components/nav-sidebar';

initializeIcons();
const theme = createTheme({
  palette: {
    themePrimary: '#00592b',
    themeLighterAlt: '#cfebdd',
    themeLighter: '#a7d9bf',
    themeLight: '#83c7a4',
    themeTertiary: '#63b48a',
    themeSecondary: '#47a273',
    themeDarkAlt: '#30905e',
    themeDark: '#1c7e4b',
    themeDarker: '#0c6b3a',
    neutralLighterAlt: '#eeeeee',
    neutralLighter: '#eaeaea',
    neutralLight: '#e1e1e1',
    neutralQuaternaryAlt: '#d1d1d1',
    neutralQuaternary: '#c8c8c8',
    neutralTertiaryAlt: '#c0c0c0',
    neutralTertiary: '#a19f9d',
    neutralSecondary: '#605e5c',
    neutralPrimaryAlt: '#3b3a39',
    neutralPrimary: '#323130',
    neutralDark: '#201f1e',
    black: '#000000',
    white: '#f4f4f4',
  },
});

// (expected) Warning: Prop `className` did not match.
// https://github.com/microsoft/fluentui/wiki/Server-side-rendering-and-browserless-testing
function App({ Component, pageProps }: AppProps) {
  return (
    <Customizer settings={{ theme }}>
      <Fabric applyTheme>
        <Head>
          <title>Sample Tab App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="container">
          <NavSidebar />
          <Component {...pageProps} />
        </div>
        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
          }
          .container {
            min-height: 100vh;
            display: flex;
          }
        `}</style>
      </Fabric>
    </Customizer>
  );
}

export default App;
