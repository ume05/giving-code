import Layout from '@/components/Layout'
import Post from '@/components/Post'
import style from './style.module.css'
import { GetStaticProps } from 'next'
import { gql } from '@apollo/client'
import { client } from '@/pages/_app'
import { Post as PostType } from '@/type/graphql'

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query allPost {
        posts {
          date
          id
          title
          slug
          coverImage {
            url
          }
          content {
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
  return (
    <>
      <Layout isHeading={true}>
        <div className={style.container}>
          {allpost &&
            allpost.posts.map((post, i) => (
              <Post
                key={post.id}
                lg={i === 0 && true}
                day={post.date}
                title={post.title}
                category={post.categories[0].name}
                text={post.content.text}
                imagePath={post.coverImage?.url}
                linkPath={`/article/${post.slug}/`}
                categoryPath="/testcategry"
              />
            ))}
        </div>
      </Layout>
    </>
  )
}

export default Index
