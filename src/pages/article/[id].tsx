import { useEffect } from 'react'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import Img from 'next/image'
import style from './style.module.css'
import Motion from '@/components/Motion'
import { GetStaticPaths, GetStaticProps } from 'next'
import { gql } from '@apollo/client'
import { client } from '@/pages/_app'
import { Post as PostType } from '@/type/graphql'

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query Paths {
        posts {
          slug
        }
      }
    `
  })
  const paths = data.posts.map((post) => {
    return `/article/${post.slug}`
  })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  let slug
  if (context.params) {
    slug = context.params.id
  }
  const { data } = await client.query({
    query: gql`
      query Article {
        post(where: { slug: "${slug}" }) {
          title
          date
          slug
          coverImage {
            url
          }
          content {
            html
          }
          categories {
            name
            slug
          }
        }
      }
    `
  })
  return {
    props: {
      postData: data
    }
  }
}

type Props = {
  postData: {
    post: PostType
  }
}

const Article: React.FC<Props> = ({ postData }) => {
  useEffect(() => {
    const pElements = document.querySelectorAll('p')
    pElements.forEach((pElement) => {
      if (pElement.firstChild?.nodeName === 'CODE') {
        pElement.setAttribute('style', 'margin-top:0;margin-bottom:0;')
      }
    })
  })
  return (
    <>
      <SEO
        title={postData.post.title}
        description={postData.post.title}
        slug={`article/${postData.post.slug}`}
        image={postData.post.coverImage}
      />
      <Layout
        headingDisplay={true}
        headingTitle={postData.post.title}
        headingDay={postData.post.date}
        headingCategoryName={postData.post.categories[0].name}
        headingCategorySlug={postData.post.categories[0].slug}
        breadLists={[
          {
            title: postData.post.categories[0].name,
            slug: postData.post.categories[0].slug
          },
          { title: postData.post.title }
        ]}
      >
        <Motion name={postData.post.title}>
          <article className={style.container}>
            <div className={style.thumbnail}>
              <figure>
                <Img
                  src={
                    postData.post.coverImage
                      ? postData.post.coverImage.url
                      : '/image/sample.jpg'
                  }
                  width={920}
                  height={404}
                />
              </figure>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: postData.post.content.html
              }}
            ></div>
          </article>
        </Motion>
      </Layout>
    </>
  )
}

export default Article
