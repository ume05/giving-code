import Img from 'next/image'
import Link from 'next/link'
import style from './style.module.css'

type Props = {
  imagePath?: string | null
  lg?: boolean
  day: string
  title: string
  category?: string | null
  text: string
  linkPath: string
  categoryPath: string
}

const Post: React.FC<Props> = ({
  imagePath,
  lg,
  day,
  title,
  category,
  text,
  linkPath,
  categoryPath
}) => {
  return (
    <>
      <div className={`${style.container} ${lg ? style.lg : ''}`}>
        <Link href={linkPath}>
          <a className={style.image}>
            <figure className="hidden md:block">
              <Img
                src={imagePath ? imagePath : '/image/sample.jpg'}
                width={lg ? 920 : 445}
                height={lg ? 405 : 260}
              ></Img>
            </figure>
            <figure className="md:hidden">
              <Img
                src={imagePath ? imagePath : '/image/sample.jpg'}
                width={920}
                height={405}
              ></Img>
            </figure>
          </a>
        </Link>
        <p className={style.day}>
          <span>{day}</span>
        </p>
        <p className={style.title}>
          <Link href={linkPath}>
            <a>{title}</a>
          </Link>
        </p>
        <p className={style.category}>
          <Link href={categoryPath}>
            <a>{category}</a>
          </Link>
        </p>
        <p className={style.text}>{text}</p>
      </div>
    </>
  )
}

export default Post
