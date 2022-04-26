import React from 'react'

import { motion } from 'framer-motion'

import Footer from '~/components/footer'

type MainLayoutProps = {
  children: React.ReactNode
}

export const MainLayout = (props: MainLayoutProps) => {
  const { children } = props

  const variants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div>
      <motion.main className="container pt-11 sm:pt-0" initial="initial" animate="animate" variants={variants}>
        {children}
      </motion.main>
      <Footer />
    </div>
  )
}
