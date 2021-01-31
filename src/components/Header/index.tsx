import Img from 'next/image'
import Link from 'next/link'
import style from './style.module.css'

const Header: React.FC = () => {
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
        <ul>
          <li className="inline-block">カテゴリ1</li>
          <li className="inline-block">カテゴリ2</li>
          <li className="inline-block">カテゴリ3</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
