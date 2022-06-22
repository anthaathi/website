import * as React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";
import { Provider as StyletronProvider } from "styletron-react";
import { Server, Sheet } from "styletron-engine-atomic";
import { styletron } from "../styletron";

class MyDocument extends Document<{ stylesheets: Sheet[] }> {
  static async getInitialProps(props: any) {
    // eslint-disable-next-line react/display-name
    const page = props.renderPage((App: any) => (props: any) => (
      <StyletronProvider value={styletron}>
        <App {...props} />
      </StyletronProvider>
    ));
    const stylesheets = (styletron as Server).getStylesheets() || [];
    const initialProps = await Document.getInitialProps(props);
    return { ...page, stylesheets, ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {this.props.stylesheets.map((sheet, i) => (
            <style
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs["data-hydrate"]}
              key={i}
            />
          ))}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/logo.png" />

          <style
            nonce="123"
            dangerouslySetInnerHTML={{
              __html: "body, html { padding: 0; margin: 0; }",
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
