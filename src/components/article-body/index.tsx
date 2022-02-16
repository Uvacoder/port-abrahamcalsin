import { DateFormatArticle } from '~/components/date-format-article'
import { ShareOnTwitter } from '../share-article'

interface ArticleBodyProps {
  title: string
  date: string
  content: string
  shareLinkSlug: string
  shareTitle: string
}

export const ArticleBody = (props: ArticleBodyProps) => {
  const { title, date, content, shareLinkSlug, shareTitle } = props

  return (
    <>
      <div className="my-0 mt-0 sm:my-9.5 sm:mt-11.2">
        <div>
          <h1 className="text-3xl sm:text-4xl">{title}</h1>
          <div className="mt-2 mb-4">
            <DateFormatArticle dateArticle={date} />
            <ShareOnTwitter
              url={`https://twitter.com/share?url=https://abrahamcalsin.com/blog/${shareLinkSlug}&text=" ${shareTitle} " por @abraham_calsin`}
            />
          </div>
        </div>
        <div
          className="text-primary-600 dark:text-inherit mt-5 sm:mt-7"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </>
  )
}
