import Img from 'next/image'
import Link from 'next/link'
import style from './style.module.css'

type Props = {
  onModalFlag: () => void
}

const Header: React.FC<Props> = ({ onModalFlag }) => {
  return (
    <header className="shadow-xl">
      <nav
        className={`${style.innr} flex justify-between items-center h-16 mx-auto`}
      >
        <div className={`${style.logo} flex w-48`}>
          <Link href="/">
            <a>
              <Img
                src="/image/logo.svg"
                width={340}
                height={64}
                loading="lazy"
              />
            </a>
          </Link>
        </div>
        <ul className="hidden md:block">
          <li className="inline-block mr-4">
            <Link href="/test-category">
              <a className="hover:text-primary">テスト</a>
            </Link>
          </li>
          <li className="inline-block">
            <Link href="/sample-category">
              <a className="hover:text-primary">サンプルカテゴリー</a>
            </Link>
          </li>
        </ul>
        <button onClick={onModalFlag} className={style.button}>
          <Img src="/image/search.svg" width={24} height={24} />
        </button>
      </nav>
    </header>
  )
}

export default Header
