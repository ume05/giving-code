import style from './style.module.css'
import Link from 'next/link'

type Props = {
  headingDisplay?: boolean
  headingTitle?: string
  headingDay?: Date
  headingCategoryName?: string | null
  headingCategorySlug?: string | null
}

const Heading: React.FC<Props> = ({
  headingDisplay,
  headingTitle,
  headingDay,
  headingCategoryName,
  headingCategorySlug
}) => {
  return (
    <>
      {headingDisplay && (
        <div className="bg-gray-400 py-6">
          <div className={style.innr}>
            <p className="mb-3">
              <span className="text-white text-xs bg-marine p-2">
                {headingDay}
              </span>
            </p>
            <h1 className="text-2xl font-bold leading-loose mb-1">
              {headingTitle}
            </h1>
            <p>
              <span className="text-xs text-gray-100">
                <Link href={`/${headingCategorySlug}`}>
                  <a>{headingCategoryName}</a>
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
