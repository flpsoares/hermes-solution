import React from 'react'
import Head from 'next/head'

interface PageSEOProps {
  title: string
  description: string
  isServicePage: boolean
}

export const PageSEO: React.FC<PageSEOProps> = ({
  title,
  description,
  isServicePage,
  children
}) => {
  return (
    <>
      <Head>
        {isServicePage ? (
          <title>{`Hermes | ${title}`}</title>
        ) : (
          <title>Hermes Solutions</title>
        )}

        <meta name="description" content={description} />
        <meta property="og:image" content="/assets/logo.png" />
        <meta property="og:image:secure_url" content="/assets/logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:image" content="/assets/logo.png" />
        <meta name="twitter:image:src" content="/assets/logo.png" />
        <meta name="instagram:image" content="/assets/logo.png" />
        <meta name="instagram:image:src" content="/assets/logo.png" />
        <meta name="facebook:image" content="/assets/logo.png" />
        <meta name="facebook:image:src" content="/assets/logo.png" />
        <meta name="whatsapp:image" content="/assets/logo.png" />
        <meta name="whatsapp:image:src" content="/assets/logo.png" />
        <meta name="linkedin:image" content="/assets/logo.png" />
        <meta name="linkedin:image:src" content="/assets/logo.png" />
        <meta property="og:description" content={description} />
      </Head>
      {children}
    </>
  )
}
