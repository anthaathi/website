import React from 'react';
import App from 'next/app';
import {Provider as StyletronProvider} from 'styletron-react';
import {BaseProvider, createDarkTheme} from 'baseui';
import {styletron} from '../styletron';

const LightTheme = createDarkTheme({
  primaryFontFamily: "'Red Hat Display', sans-serif",
});

export default class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props;
    return (
      <StyletronProvider value={styletron}>
        <BaseProvider theme={LightTheme}>
          <Component {...pageProps} />
        </BaseProvider>
      </StyletronProvider>
    );
  }
}
