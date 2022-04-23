import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Xyy Next</title>
        <meta content="Xyy's personal website" name="description" />
        <link href="/favicon.png" rel="icon" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
