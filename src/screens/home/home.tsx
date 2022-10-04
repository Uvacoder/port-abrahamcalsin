import * as React from 'react'

import { MainLayout } from '~/layouts'

import { Content } from './components/content'

export function HomeScreen() {
  return (
    <MainLayout>
      <Content />
    </MainLayout>
  )
}
