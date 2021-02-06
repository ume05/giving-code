import { useState } from 'react'
import Header from '@/components/Header'
import MV from '@/components/MV'
import Heading from '@/components/Heading'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import SearchModal from '@/components/SearchModal'
import BreadCrumb from '@/components/BreadCrumb'
import style from './style.module.css'

type Props = {
  headingDisplay?: boolean
  headingTitle?: string
  headingDay?: Date
  headingCategoryName?: string | null
  headingCategorySlug?: string | null
  isHeading?: boolean
  breadLists?: {
    title?: string | null
    slug?: string | null
  }[]
}

const Layout: React.FC<Props> = ({
  children,
  headingDisplay,
  headingTitle,
  headingDay,
  headingCategoryName,
  headingCategorySlug,
  isHeading,
  breadLists
}) => {
  const [isModal, setIsModal] = useState(false)
  const onModalFlag = () => {
    setIsModal(true)
    document.body.setAttribute('style', 'overflow: hidden;')
  }
  const offModalFlag = () => {
    setIsModal(false)
    document.body.removeAttribute('style')
  }
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
        {breadLists && <BreadCrumb breadLists={breadLists} />}
        <div className={`${style.wrapper} pt-8 pb-20`}>
          <div className={style.innr}>{children}</div>
          <Sidebar onModalFlag={onModalFlag} />
        </div>
        {isModal && <SearchModal offModalFlag={offModalFlag} />}
      </main>
      <Footer />
    </>
  )
}

export default Layout
