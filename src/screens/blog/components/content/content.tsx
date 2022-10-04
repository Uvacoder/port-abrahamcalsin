import * as React from 'react'
import { Box, Text } from '@chakra-ui/react'

import { AllArticles } from '~/components/all-articles'
import { TitleSection } from '~/components/title-section'
import Article from '~/types/article'

export interface ContentProps {
  articles: Article[]
}

export function Content(props: ContentProps) {
  const { articles } = props

  return (
    <Box mt={{ base: '0', sm: '90px' }} mb={{ base: '0', sm: '30px' }}>
      <TitleSection title="Blog" externalLinkButton={false} />
      <Text fontWeight="medium" lineHeight={{ base: '24px', sm: '36px' }} mt="6px" px="0">
        En esta sección puedes ver artículos sobre exploraciones del mundo del desarrollo web, tutoriales, guías
        prácticas. También escribo sobre diseño y experiencia de usuario/dev.
      </Text>
      {articles.length >= 0 && <AllArticles articles={articles} />}
    </Box>
  )
}
