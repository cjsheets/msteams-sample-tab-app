import * as React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentProps,
} from 'next/document';
import { Stylesheet, InjectionMode } from '@uifabric/merge-styles';
import { resetIds } from '@uifabric/utilities';

const stylesheet = Stylesheet.getInstance();
stylesheet.setConfig({
  injectionMode: InjectionMode.none,
  namespace: 'server',
});

export default class MyDocument extends Document<DocumentProps & { styleTags: string }> {
  static async getInitialProps({ renderPage }: DocumentContext) {
    stylesheet.reset();
    resetIds();

    const page = renderPage((App) => (props) => <App {...props} />);

    return { ...page, styleTags: stylesheet.getRules(true) };
  }

  render() {
    return (
      <Html>
        <Head>
          <style type="text/css" dangerouslySetInnerHTML={{ __html: this.props.styleTags }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
