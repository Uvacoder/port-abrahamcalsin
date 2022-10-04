import { Text } from '@chakra-ui/react'
import dayjs from 'dayjs'
import en from 'dayjs/locale/en'

import { dateFormat } from '~/utils'

interface DateFormatArticleProps {
  dateArticle: string
}

export function DateFormatArticle(props: DateFormatArticleProps) {
  const { dateArticle = new Date() } = props

  const date = dayjs(dateArticle).locale(en).format(dateFormat.article)

  return (
    <Text as="span" fontWeight="regular" textColor="inherit" textTransform="capitalize">
      {date}
    </Text>
  )
}
