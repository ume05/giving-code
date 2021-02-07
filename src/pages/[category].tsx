import Layout from '@/components/Layout'
import Post from '@/components/Post'
import Motion from '@/components/Motion'
import SEO from '@/components/SEO'
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
            raw
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
      <SEO
        title={postData.posts[0].categories[0].name}
        description={postData.posts[0].categories[0].name}
        slug={postData.posts[0].categories[0].slug}
      />
      <Layout
        isHeading={true}
        breadLists={[
          {
            title: postData.posts[0].categories[0].name,
            slug: postData.posts[0].categories[0].slug
          }
        ]}
      >
        <Motion
          name={
            postData.posts[0].categories[0].slug
              ? postData.posts[0].categories[0].slug
              : 'category'
          }
        >
          <div className={style.container}>
            {postData &&
              postData.posts.map((post, i) => (
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

export default Category
