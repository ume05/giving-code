import { useState, useEffect } from 'react'
import Layout from '@/components/Layout'
import Post from '@/components/Post'
import Motion from '@/components/Motion'
import SEO from '@/components/SEO'
import Loader from '@/components/Loader'
import style from './style.module.css'
import { GetStaticProps } from 'next'
import { gql } from '@apollo/client'
import { client } from '@/pages/_app'
import { Post as PostType } from '@/type/graphql'

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query allPost {
        posts(orderBy: date_DESC) {
          date
          id
          title
          slug
          coverImage {
            url
          }
          content {
            raw
            text
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
      allpost: data
    }
  }
}

type Props = {
  allpost: {
    posts: PostType[]
  }
}

const Index: React.FC<Props> = ({ allpost }) => {
  const [cache, setCache] = useState(false)
  useEffect(() => {
    const flag = sessionStorage.getItem('key')
    if (!flag) {
      setCache(true)
      sessionStorage.setItem('key', 'value')
    }
  }, [])
  return (
    <>
      <SEO />
      {cache && <Loader />}
      <Layout isHeading={true}>
        <Motion name="index">
          <div className={style.container}>
            {allpost &&
              allpost.posts.map((post, i) => (
                <Post
                  key={post.id}
                  lg={i === 0 && true}
                  day={post.date}
                  title={post.title}
                  category={post.categories[0].name}
                  text={post.content.raw.children[0].children[0].text}
                  imagePath={post.coverImage?.url}
                  linkPath={`/article/${post.slug}/`}
                  categoryPath={`/${post.categories[0].slug}/`}
                />
              ))}
          </div>
        </Motion>
      </Layout>
    </>
  )
}

export default Index
