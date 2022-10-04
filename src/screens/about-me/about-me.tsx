import * as React from 'react'

import { Meta } from '~/components/meta'
import { MainLayout } from '~/layouts'

import { Content } from './components/content'

export function AboutMeScreen() {
  return (
    <MainLayout>
      <Meta title="Sobre Mi" />
      <Content />
    </MainLayout>
  )
}
