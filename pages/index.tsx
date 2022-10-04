import type { NextPage } from 'next'

import { Meta } from '~/components/meta'
import { HomeScreen } from '~/screens/home'

const HomePage: NextPage = () => {
  return (
    <>
      <Meta />
      <HomeScreen />
    </>
  )
}
export default HomePage
