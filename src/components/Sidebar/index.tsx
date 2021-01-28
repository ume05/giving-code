import { NextComponentType } from 'next'
import Img from 'next/image'
import Link from 'next/link'
import style from './style.module.css'

const Sidebar: NextComponentType = () => {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.popular}>
          <h2>POPULAR</h2>
          <div className={style.content}>
            <ul>
              <li>
                <Link href="/">
                  <a className={style.link}>
                    <div className={style.gray}></div>
                    <span className={style.number}>1</span>
                    <figure className={style.image}>
                      <Img src="/image/sample.jpg" width={250} height={150} />
                    </figure>
                    <div className={style.box}>
                      <p className={style.text}>サンプルタイトル</p>
                      <p className={style.category}>カテゴリー</p>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className={style.link}>
                    <div className={style.gray}></div>
                    <span className={style.number}>2</span>
                    <figure className={style.image}>
                      <Img src="/image/sample.jpg" width={250} height={150} />
                    </figure>
                    <div className={style.box}>
                      <p className={style.text}>サンプルタイトル</p>
                      <p className={style.category}>カテゴリー</p>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className={style.link}>
                    <div className={style.gray}></div>
                    <span className={style.number}>3</span>
                    <figure className={style.image}>
                      <Img src="/image/sample.jpg" width={250} height={150} />
                    </figure>
                    <div className={style.box}>
                      <p className={style.text}>サンプルタイトル</p>
                      <p className={style.category}>カテゴリー</p>
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
