import Layout from '@/components/Layout'
import Post from '@/components/Post'
import style from './style.module.css'
import { GetStaticPaths, GetStaticProps } from 'next'
import { gql } from '@apollo/client'
import { client } from '@/pages/_app'
import { Post as PostType } from '@/type/graphql'

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query categoryPaths {
        categories {
          slug
        }
      }
    `
  })
  const paths = data.categories.map((category) => {
    return `/${category.slug}/`
  })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  let slug
  if (context.params) {
    slug = context.params.category
  }
  const { data } = await client.query({
    query: gql`
      query Category {
        posts(where: {categories_some: {slug: "${slug}"}}, orderBy: date_DESC) {
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
      postData: data
    }
  }
}

type Props = {
  postData: {
    posts: PostType[]
  }
}

const Category: React.FC<Props> = ({ postData }) => {
  return (
    <>
      <Layout isHeading={true}>
        <p className="text-lg font-bold mb-4">
          「{postData && postData.posts[0].categories[0].name}」の記事一覧
        </p>
        <div className={style.container}>
          {postData &&
            postData.posts.map((post, i) => (
              <Post
                key={post.id}
                lg={i === 0 && true}
                day={post.date}
                title={post.title}
                category={post.categories[0].name}
                text={post.content.text}
                imagePath={post.coverImage?.url}
                linkPath={`/article/${post.slug}/`}
                categoryPath={`/${post.categories[0].slug}/`}
              />
            ))}
        </div>
      </Layout>
    </>
  )
}

export default Category
