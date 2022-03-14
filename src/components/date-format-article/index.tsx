import dayjs from 'dayjs'
import { dateFormat } from '~/utils'

interface DateFormatArticleProps {
  dateArticle: string
}

export const DateFormatArticle = (props: DateFormatArticleProps) => {
  const { dateArticle = new Date() } = props

  return (
    <span className="font-regular text-inherit dark:text-inherit">{dayjs(dateArticle).format(dateFormat.article)}</span>
  )
}
