import { useState } from 'react'
import Link from 'next/link'
import style from './style.module.css'
import { gql, useQuery } from '@apollo/client'
import { Post as PostType } from '@/type/graphql'

const modalData = gql`
  query modal {
    posts(orderBy: date_DESC) {
      id
      title
      slug
      date
      content {
        text
      }
    }
  }
`

type postData = {
  posts: PostType[]
}

type Props = {
  offModalFlag: () => void
}

type state = {
  filteredData: PostType[]
  query: string
}

const SearchModal: React.FC<Props> = ({ offModalFlag }) => {
  const { data } = useQuery<postData>(modalData)
  const allPosts = data?.posts
  const emptyQuery = '' //検索条件の初期設定、及び何も入力がない場合の判定用
  const [state, setState] = useState<state>({
    filteredData: [],
    query: emptyQuery
  })
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value
    const posts = data ? data.posts : []
    const filteredData = posts.filter((post) => {
      const title = post.title
      const text = post.content.text
      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
        text.toLowerCase().includes(query.toLowerCase())
      )
    })
    setState({
      filteredData,
      query
    })
  }
  const { filteredData, query } = state //handleInputChangeイベントで絞り込んだ配列と定義したqueryを定数に分割代入
  const hasSearchResults = filteredData && query !== emptyQuery //上記定数がある（検索条件がある）かどうかを判定
  const result = hasSearchResults ? filteredData : allPosts
  return (
    <div className="fixed inset-0 w-screen h-screen z-40 p-16">
      <div
        className="absolute inset-0 w-full h-full bg-modal z-40"
        onClick={offModalFlag}
      ></div>
      <div className={style.content}>
        <button onClick={offModalFlag} className={style.button} />
        <input
          className={style.input}
          type="text"
          placeholder="検索ワードを入力"
          onChange={handleInputChange}
        />
        <p className="p-4 my-4 bg-gray-300">
          {query && result
            ? `${query}の検索結果：${result?.length}件の記事があります`
            : result
            ? `${result?.length}件の記事があります`
            : '0件の記事があります'}
        </p>
        <ul className={style.data}>
          {result &&
            result.map((post) => (
              <li onClick={offModalFlag} key={post.id}>
                <Link href={`/article/${post.slug}`}>
                  <a>
                    {post.title}
                    <br />
                    <span className="text-sm">{post.date}</span>
                  </a>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default SearchModal
