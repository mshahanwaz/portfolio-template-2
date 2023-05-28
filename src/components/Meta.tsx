import Head from 'next/head';
import React from 'react';

export default function Meta({ title = 'M. Shahanwaz' }: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="✨ Personal portfolio website built with Next.js"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="#f9fafb"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="#111827"
      />

      <meta name="robots" content="index, follow" />
      <meta name="author" content="M. Shahanwaz" />
      <meta
        name="keywords"
        content="M. Shahanwaz, Shahanwaz, Mohammad Shahanwaz"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://shahanwaz.vercel.app/" />
      <meta property="og:title" content="M. Shahanwaz" />
      <meta
        property="og:description"
        content="✨ Personal portfolio website built with Next.js"
      />
      <meta
        property="og:image"
        content="https://shahanwaz.vercel.app/images/og.png"
      />
      <meta property="og:image:alt" content="M. Shahanwaz" />
      <meta property="og:site_name" content="M. Shahanwaz" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@_mshahanwaz" />
      <meta name="twitter:creator" content="@_mshahanwaz" />
      <meta name="twitter:title" content="M. Shahanwaz" />
      <meta
        name="twitter:description"
        content="✨ Personal portfolio website built with Next.js"
      />
      <meta
        name="twitter:image"
        content="https://shahanwaz.vercel.app/images/og.png"
      />
      <meta name="twitter:image:alt" content="M. Shahanwaz" />
      <meta name="twitter:domain" content="shahanwaz.vercel.app" />
      <link rel="canonical" href="https://shahanwaz.vercel.app/" />
      <link rel="apple-touch-icon" href="/images/favicon.png" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

type Props = {
  title?: string;
};
