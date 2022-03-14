import Link from 'next/link'

import { DateFormatArticle } from '~/components/date-format-article'
import { CoffeeStrokeIcon } from '~/components/svgs/icons/coffee-stroke-icon'

interface ArticlePreviewProps {
  title: string
  date: string
  description: string
  slug: string
  readingTime: string
}

export const ArticlePreview = (props: ArticlePreviewProps) => {
  const { title, date, description, slug, readingTime } = props

  return (
    <div className="mb-5 bg-primary-100/50 dark:bg-white/10 hover:opacity-80 transition-opacity rounded-md border-px border-primary-300 dark:border-primary-500">
      <Link href={`/blog/${slug}`} passHref>
        <a className="p-2.5 block">
          <h3 className="text-primary-700 dark:text-primary-400 mb-1 line-clamp-1 font-bold">{title}</h3>
          <p className="line-clamp-2 mb-1 text-base text-primary-500">{description}</p>
          <p className="flex items-center mb-0 font-regular text-sm text-primary-500">
            <DateFormatArticle dateArticle={date} />
            <span className="mx-1.2">|</span>
            <p className="flex text-sm font-regular items-center gap-1 m-0">
              <CoffeeStrokeIcon className="w-2" />
              <span>{readingTime}</span>
            </p>
          </p>
        </a>
      </Link>
    </div>
  )
}
