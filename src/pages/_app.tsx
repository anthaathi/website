import React from 'react';
import App from 'next/app';
import {Provider as StyletronProvider} from 'styletron-react';
import {BaseProvider, createDarkTheme} from 'baseui';
import {styletron} from '../styletron';
import {DarkTheme} from '../theme';

export default class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props;

    return (
      <StyletronProvider value={styletron}>
        <BaseProvider theme={DarkTheme}>
          <Component {...pageProps} />
        </BaseProvider>
      </StyletronProvider>
    );
  }
}
