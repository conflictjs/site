import Head from "next/head";

export default function Meta({ title }) {
  const siteTitle = "Conflict";
  const description = "Conflict: Build incredible Discord integrations, faster and simpler than with any other library.";
  const keywords = "discord, conflict";
  const author = "YodaLightsabr";
  const themeColor = "#ffffff";
  const darkThemeColor = "#000000";
  const image =
    "https://conflict.js.org/favicon.png";
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>
        {title.startsWith('!') ? (title.substring(1)) : (title + " | " + siteTitle)}
      </title>
      <link rel="favicon" href="/favicon.png" />
      <link rel="icon" href="/favicon.png" />
      <link rel="shortcut icon" href="/favicon.png" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta
        name="theme-color"
        content={themeColor}
        media="(prefers-color-scheme: light)"
      />
      <meta
        name="theme-color"
        content={darkThemeColor}
        media="(prefers-color-scheme: dark)"
      />
      <meta property="og:url" content="https://conflict.js.org" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title.startsWith('!') ? (title.substring(1)) : (title)} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
