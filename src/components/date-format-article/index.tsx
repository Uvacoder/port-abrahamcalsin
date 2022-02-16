import dayjs from 'dayjs'
import { dateFormat } from '~/utils'

interface DateFormatArticleProps {
  dateArticle: string
}

export const DateFormatArticle = (props: DateFormatArticleProps) => {
  const { dateArticle = new Date() } = props

  return (
    <span className="mr-2 font-regular text-primary-600 dark:text-inherit italic">
      {dayjs(dateArticle).format(dateFormat.article)}
    </span>
  )
}
