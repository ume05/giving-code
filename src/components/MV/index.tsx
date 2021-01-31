import style from './style.module.css'

type Props = {
  isHeading?: boolean
}

const MV: React.FC<Props> = ({ isHeading }) => {
  return (
    <>
      <div className={style.innr}>
        <div className={style.gray}>
          <div className={style.text}>
            <p className="text-white text-3xl mb-4">GIVING CODE</p>
            {isHeading ? (
              <h1 className="text-white">
                Giving
                Codeは、主にJavascriptなどフロントエンドの技術情報を発信しているブログです。
              </h1>
            ) : (
              <p className="text-white">
                Giving
                Codeは、主にJavascriptなどフロントエンドの技術情報を発信しているブログです。
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default MV
