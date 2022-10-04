import * as React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { ProjectsPageProps } from 'pages/projects'

import { TitleSection } from '~/components/title-section'
import { WorkItem } from '~/components/work-item'
import { Works } from '~/components/works'

export function Content<T extends Record<string, any>>(props: ProjectsPageProps<T>) {
  const { projects } = props

  return (
    <Box mt={{ base: '0', sm: '90px' }} mb={{ base: '0', sm: '30px' }}>
      <TitleSection
        title="Proyectos"
        externalLinkButton={true}
        href="https://github.com/abrahamcalsin"
        linkText="Puedes verlos todos en mi"
        linkTextBold="GitHub"
      />
      <Text mt="6px" px="0" fontWeight="medium" lineHeight={{ base: '24px', sm: '36px' }}>
        En esta sección puedes ver algunos de mis proyectos más destacados.
      </Text>
      <Works>
        {projects.map(project => (
          <WorkItem
            key={project.id}
            date={project.properties.startedAt.date.start}
            title={project.properties.title.title[0].text.content}
            description={project.properties.description.rich_text[0].plain_text}
            tags={project.properties.tags.multi_select.map((tag: { id: string; name: string; color: string }) => (
              <Text as="span" key={tag.id}>
                {tag.name}, {''}
              </Text>
            ))}
            webHref={project.properties.webHref.url}
            repositoryHref={project.properties.repositoryHref.url}
            packageHref={project.properties.packageHref.url}
            packageDownloads={project.properties.packageHref.url !== null && true}
          />
        ))}
      </Works>
    </Box>
  )
}
