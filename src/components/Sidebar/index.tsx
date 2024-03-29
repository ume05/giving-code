import Img from 'next/image'
import Link from 'next/link'
import style from './style.module.css'
import { gql, useQuery } from '@apollo/client'
import { Post as PostType } from '@/type/graphql'

const sidebarData = gql`
  query Sidebar {
    posts(where: { popular: true }, orderBy: date_DESC) {
      id
      title
      slug
      coverImage {
        url
      }
      categories {
        name
        slug
      }
    }
  }
`
type postData = {
  posts: PostType[]
}

type Props = {
  onModalFlag: () => void
}

const Sidebar: React.FC<Props> = ({ onModalFlag }) => {
  const { data } = useQuery<postData>(sidebarData)
  return (
    <>
      <aside className={style.wrapper}>
        <div className={style.search}>
          <h2>SEARCH</h2>
          <div className={style.content}>
            <button onClick={onModalFlag} className={style.button}>
              <Img src="/image/search.svg" width={24} height={24} />
              <span>検索する</span>
            </button>
          </div>
        </div>
        <div className={style.popular}>
          <h2>POPULAR</h2>
          <div className={style.content}>
            <ul>
              {data &&
                data.posts.map((post, i) => (
                  <li key={post.id}>
                    <Link href={`/article/${post.slug}`}>
                      <a className={style.link}>
                        <div className={style.gray}></div>
                        <span className={style.number}>{i + 1}</span>
                        <figure className={style.image}>
                          <Img
                            src={
                              post.coverImage?.url
                                ? post.coverImage?.url
                                : '/image/sample.jpg'
                            }
                            width={800}
                            height={480}
                          />
                        </figure>
                        <div className={style.box}>
                          <p className={style.text}>{post.title}</p>
                          <p className={style.category}>
                            {post.categories[0].name}
                          </p>
                        </div>
                      </a>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className={style.author}>
          <h2>AUTHOR</h2>
          <div className={style.content}>
            <figure className={style.authorImage}>
              <Img
                src="/image/profile.jpg"
                width={800}
                height={800}
                alt="著者イメージ"
              />
            </figure>
            <p className="font-bold">Ume</p>
            <p className="mb-2 text-sm">
              和歌山県出身のフロントエンドエンジニアです。
            </p>
            <p className="font-bold text-sm">主にできること（増やしたい）</p>
            <p className="text-sm break-all">
              HTML、CSS、JavaScript、TypeScript、Vue.js(Nuxt.js)、React.js(Next.js,Gatsby.js)、WordPress、Git(GitHub)
            </p>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
