import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="theme-color" content="#ff0000" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          {/* Google Fonts */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"
          />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"
          />
          {/* CSS Reset 
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
          />
          */}
          {/* Milligram CSS */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"
          />
          <!-- Hotjar Tracking Code for gholamrezadar.ir -->
          <script>
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:2251569,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          </script>
          <title>Gholamrezadar | Personal Blog</title>
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
