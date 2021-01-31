import style from './style.module.css'
import Link from 'next/link'

type Props = {
  headingDisplay?: boolean
  headingTitle?: string
}

const Heading: React.FC<Props> = ({ headingDisplay, headingTitle }) => {
  return (
    <>
      {headingDisplay && (
        <div className="bg-gray-400 py-6">
          <div className={style.innr}>
            <p className="mb-3">
              <span className="text-white text-xs bg-marine p-2">
                2020年2月15日
              </span>
            </p>
            <h1 className="text-2xl font-bold leading-loose mb-1">
              {headingTitle}
            </h1>
            <p>
              <span className="text-xs text-gray-100">
                <Link href="/">
                  <a>カテゴリ</a>
                </Link>
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default Heading
