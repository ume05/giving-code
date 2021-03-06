import { useState, useEffect } from 'react'
import style from './style.module.css'

const Loader: React.FC = () => {
  const [isLoader, setIsLoader] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoader(false)
    }, 1000)
  }, [])
  return (
    <>
      {isLoader && (
        <div className={style.loader}>
          <p>now Loading...</p>
        </div>
      )}
    </>
  )
}

export default Loader
