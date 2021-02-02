import Header from '@/components/Header'
import MV from '@/components/MV'
import Heading from '@/components/Heading'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import style from './style.module.css'

type Props = {
  headingDisplay?: boolean
  headingTitle?: string
  headingDay?: Date
  headingCategoryName?: string | null
  headingCategorySlug?: string | null
  isHeading?: boolean
}

const Layout: React.FC<Props> = ({
  children,
  headingDisplay,
  headingTitle,
  headingDay,
  headingCategoryName,
  headingCategorySlug,
  isHeading
}) => {
  return (
    <>
      <Header />
      <main>
        <MV isHeading={isHeading} />
        <Heading
          headingDisplay={headingDisplay}
          headingTitle={headingTitle}
          headingDay={headingDay}
          headingCategoryName={headingCategoryName}
          headingCategorySlug={headingCategorySlug}
        />
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
