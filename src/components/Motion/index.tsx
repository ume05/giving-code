import { motion } from 'framer-motion'

type Props = {
  name: string
}

const Motion: React.FC<Props> = ({ children, name }) => {
  return (
    <>
      <motion.div
        key={name}
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </>
  )
}

export default Motion
