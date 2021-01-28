import Layout from '@/components/Layout'
import Post from '@/components/Post'
import style from './style.module.css'

const Single: React.FC = () => {
  return (
    <>
      <Layout>
        <div className={style.container}>記事ぺーじだお</div>
      </Layout>
    </>
  )
}

export default Single
