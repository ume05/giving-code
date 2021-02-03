import style from './style.module.css'

const Footer: React.FC = () => {
  return (
    <>
      <footer className={`${style.wrapper} pt-10 pb-14`}>
        <div className={style.innr}>
          <ul className="mb-16">
            <li className="inline-block mr-4">カテゴリ1</li>
            <li className="inline-block mr-4">カテゴリ2</li>
            <li className="inline-block">カテゴリ3</li>
          </ul>
          <small className="text-gray-200 text-sm">
            &copy;2021 Giving Code
          </small>
        </div>
      </footer>
    </>
  )
}

export default Footer
