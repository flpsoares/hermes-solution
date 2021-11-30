import React from 'react'
import Head from 'next/head'

interface PageSEOProps {
  title: string
  description: string
  path: string
  isServicePage: boolean
}

export const PageSEO: React.FC<PageSEOProps> = ({
  title,
  description,
  isServicePage,
  path,
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
        <meta
          property="og:image"
          itemProp="image"
          content="https://hermes-solution.vercel.app/assets/logo.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://hermes-solution.vercel.app/assets/logo.png"
        />
        <meta
          property="og:url"
          content={`https://hermes-solution.vercel.app/${path}`}
        ></meta>
        <meta property="og:title" content={title} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:site_name" content="Hermes Solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt-BR" />
        <meta property="og:description" content={description} />
      </Head>
      {children}
    </>
  )
}
