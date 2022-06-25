import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="theme-color" content="#0E0E14" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  )
}