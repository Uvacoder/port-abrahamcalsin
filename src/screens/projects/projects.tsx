import * as React from 'react'

import { Meta } from '~/components/meta'
import { MainLayout } from '~/layouts'

import { Content } from './components/content'

interface ProjectsScreenProps<T> {
  projects: T[]
}

export function ProjectsScreen<T extends Record<string, any>[]>(props: ProjectsScreenProps<T>) {
  const { projects } = props

  return (
    <MainLayout>
      <Meta title="Projects" />
      <Content projects={projects} />
    </MainLayout>
  )
}
