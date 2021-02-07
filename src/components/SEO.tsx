import { Helmet } from 'react-helmet'
import { Asset } from '@/type/graphql'

type Props = {
  title?: string | null
  description?: string | null
  slug?: string | null
  image?: Asset | null
}

const SEO: React.FC<Props> = ({ title, description, slug, image }) => {
  return (
    <>
      <Helmet>
        <title>{title ? `Giving Code | ${title}` : 'Giving Code'}</title>
        <meta
          name="description"
          content={
            description
              ? `「${description}」のページです。Giving Codeは、主にJavascriptなどフロントエンドの技術情報を発信しているブログです。`
              : 'Giving Codeは、主にJavascriptなどフロントエンドの技術情報を発信しているブログです。'
          }
        />
        <meta
          property="og:url"
          content={
            slug ? `${process.env.BASEURL}/${slug}` : process.env.BASEURL
          }
        />
        <meta
          property="og:title"
          content={title ? `Giving Code | ${title}` : 'Giving Code'}
        />
        <meta
          property="og:description"
          content={
            description
              ? `「${description}」のページです。Giving Codeは、主にJavascriptなどフロントエンドの技術情報を発信しているブログです。`
              : 'Giving Codeは、主にJavascriptなどフロントエンドの技術情報を発信しているブログです。'
          }
        />
        <meta
          property="og:image"
          content={image ? image.url : `${process.env.BASEURL}/image/mv.jpg`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="Giving Code" />
        <meta property="og:locale" content="ja_JP" />
        <link
          rel="canonical"
          href={slug ? `${process.env.BASEURL}/${slug}` : process.env.BASEURL}
        />
        <link rel="icon" href="favicon.ico" sizes="48x48" />
      </Helmet>
    </>
  )
}

export default SEO
