import Header from '@/components/Header'
import MV from '@/components/MV'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import style from './style.module.css'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <MV />
        <div className={`${style.wrapper} pt-8 pb-20`}>
          <div className={style.innr}>{children}</div>
          <Sidebar />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Layout
