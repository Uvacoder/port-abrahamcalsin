import { TwitterStrokeIcon } from '~/components/svgs/icons/twitter-stroke-icon'

interface ShareArticleProps {
  articleLink: string
  articleTitle: string
}

export const ShareArticle = (props: ShareArticleProps) => {
  const { articleLink, articleTitle } = props

  return (
    <div className="w-full inline-flex items-center justify-center gap-x-1 sm:sticky mt-2.5 sm:bottom-10">
      <a
        className="flex items-center gap-x-0.7 not-italic text-sm bg-[#1EA1F1] hover:bg-[#57B3EB] shadow-lg shadow-primary/20 text-primary-50 font-semiBold px-2.2 py-1 rounded-full"
        target="_blank"
        rel="nofollow noopener noreferrer"
        href={`https://twitter.com/share?url=https://abrahamcalsin.com/blog/${articleLink}&text=" ${articleTitle} " por @abraham_calsin`}
      >
        <span>Compartir artículo</span>
        <span className="w-2">
          <TwitterStrokeIcon />
        </span>
      </a>
    </div>
  )
}
