import Layout from '@/components/Layout'
import Post from '@/components/Post'
import style from './style.module.css'

const Index: React.FC = () => {
  return (
    <>
      <Layout>
        <div className={style.container}>
          <Post
            lg={true}
            day="2021年2月15日"
            title="テストタイトル"
            category="テストカテゴリ"
            text="テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト"
            linkPath="/single"
            categoryPath="/testcategry"
          />
          <Post
            day="2021年2月15日"
            title="テストタイトル"
            category="テストカテゴリ"
            text="テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト"
            linkPath="/single"
            categoryPath="/testcategry"
          />
          <Post
            day="2021年2月15日"
            title="テストタイトル"
            category="テストカテゴリ"
            text="テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト"
            linkPath="/single"
            categoryPath="/testcategry"
          />
        </div>
      </Layout>
    </>
  )
}

export default Index
