import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="tr-TR">
        <Head>
          <link rel="icon" href="/static/marmarakizogrenciyurdu.ico" ></link>
          <link rel="shortcut icon" href="/static/logo.png" type="image/png"/> 
          <meta name='Marmara kız öğrenci yurdu' content='Kadıköy kız öğrenci yurdu'></meta>
          <meta name='description' content="Kadıköy'ün merkezinde otel konforunda kız öğrenci yurdu. Erken dönem kayıt avantajlarını kaçırmayın"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
