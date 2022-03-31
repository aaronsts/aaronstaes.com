import { Html, Head, Main, NextScript, DocumentContext } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;500;700;900&family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />

        <meta
          name="description"
          content="Being both a developer and designer makes the process of building the perfect website for my clients' needs much easier."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aaronstaes-com.vercel.app/" />
        <meta
          property="og:title"
          content="Aäron Staes Media | Design - Full Stack Development"
        />
        <meta
          property="og:description"
          content="Being both a developer and designer makes the process of building the perfect website for my clients' needs much easier."
        />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://aaronstaes.com/meta_img.avif"
        />
        <meta
          property="twitter:title"
          content="Aäron Staes Media | Design - Full Stack Development"
        />
        <meta
          property="twitter:description"
          content="Being both a developer and designer makes the process of building the perfect website for my clients' needs much easier."
        />
        <meta
          property="twitter:image"
          content="https://aaronstaes.com/meta_img.avif"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
