import { ShareFillIcon } from '../svgs/icons/share-fill-icon'

interface ShareOnTwitterProps {
  url: string
}

export const ShareOnTwitter = (props: ShareOnTwitterProps) => {
  const { url } = props

  return (
    <a
      className="inline-flex items-center gap-x-0.7 bg-primary-100 dark:bg-secondary/10 border-px border-primary-500 dark:border-secondary text-primary-700 dark:text-secondary py-1 px-1.5 rounded font-semiBold not-italic hover:underline text-sm mt-1 sm:mt-0 transition-opacity hover:opacity-80"
      target="_blank"
      rel="nofollow noopener"
      href={url}
    >
      Comparte este articulo en Twitter
      <ShareFillIcon width={17} />
    </a>
  )
}
