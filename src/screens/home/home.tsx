import * as React from 'react'

import { Meta } from '~/components/meta'
import { MainLayout } from '~/layouts'

import { Content } from './components/content'

export function HomeScreen() {
  return (
    <MainLayout>
      <Meta />
      <Content />
    </MainLayout>
  )
}
