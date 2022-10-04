import React from 'react'

import { Meta } from '~/components/meta'
import { notion } from '~/lib/notion/notion'
import { ProjectsScreen } from '~/screens/projects/projects'

export interface ProjectsPageProps<T> {
  projects: T[]
}

function ProjectsPage<T extends Record<string, any>[]>(props: ProjectsPageProps<T>) {
  const { projects } = props

  return (
    <>
      <Meta title="Projects" />
      <ProjectsScreen projects={projects} />
    </>
  )
}

export async function getStaticProps() {
  const response = await notion({
    notionApiKey: process.env.NOTION_API_KEY!,
    notionDatabaseId: process.env.NOTION_DATABASE_ID!,
    sorts: [
      {
        property: 'startedAt',
        direction: 'descending',
      },
    ],
    filter: {
      property: 'status',
      select: { equals: 'published' },
    },
  })

  if (!response) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      projects: response.results,
    },
    revalidate: 10,
  }
}

export default ProjectsPage
