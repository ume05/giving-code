import Link from 'next/link'
import style from './style.module.css'

type Props = {
  breadLists?: {
    title?: string | null
    slug?: string | null
  }[]
}

const BreadCrumb: React.FC<Props> = ({ breadLists }) => {
  return (
    <div className={style.breadcrumb}>
      <ol itemScope itemType="https://schema.org/BreadcrumbList">
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
          className={style.list}
        >
          <Link href="/">
            <a itemProp="item">TOP</a>
          </Link>
          <meta itemProp="position" content="1" />
        </li>
        {breadLists &&
          breadLists.map((list, i) => (
            <li
              key={i}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className={style.list}
            >
              {list.slug ? (
                <Link href={`/${list.slug}`}>
                  <a itemProp="item">
                    <span itemProp="name">{list.title}</span>
                  </a>
                </Link>
              ) : (
                <span itemProp="name">{list.title}</span>
              )}
              <meta itemProp="position" content="1" />
            </li>
          ))}
      </ol>
    </div>
  )
}

export default BreadCrumb
