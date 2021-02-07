import style from './style.module.css'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <>
      <footer className={`${style.wrapper} pt-6 pb-6 md:pt-10 md:pb-14`}>
        <div className={style.innr}>
          <ul className="mb-16 hidden md:block">
            <li className="inline-block mr-4">
              <Link href="/test-category">
                <a className="hover:text-primary">テスト</a>
              </Link>
            </li>
            <li className="inline-block mr-4">
              <Link href="/sample-category">
                <a className="hover:text-primary">サンプルカテゴリー</a>
              </Link>
            </li>
          </ul>
          <small className="block text-gray-200 text-sm text-center md:text-left">
            &copy;2021 Giving Code
          </small>
        </div>
      </footer>
    </>
  )
}

export default Footer
