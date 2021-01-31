import Layout from '@/components/Layout'
import Img from 'next/image'
import style from './style.module.css'
import { GetStaticPaths, GetStaticProps } from 'next'
import { gql } from '@apollo/client'
import { client } from '@/pages/_app'

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
  const slug = context.params.id
  const { data } = await client.query({
    query: gql`
      query Article {
        post(where: { slug: "${slug}" }) {
          title
          coverImage {
            url
          }
          content {
            html
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
  postData: any
}

const Article: React.FC<Props> = ({ postData }) => {
  return (
    <>
      <Layout headingDisplay={true} headingTitle={postData.post.title}>
        <article className={style.container}>
          <div className={style.thumbnail}>
            <figure>
              <Img
                src={postData.post.coverImage.url}
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
      </Layout>
    </>
  )
}

export default Article
