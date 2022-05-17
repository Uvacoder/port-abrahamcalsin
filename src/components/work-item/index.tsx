import dayjs from 'dayjs'

import { PackageDownloads } from '~/components/package-downloads'
import { ClockFillIcon,ExternalLinkIcon, OctocatFillIcon, PackageFillIcon } from '~/components/svgs/icons'
import { Tag } from '~/components/tag'
import { dateFormat } from '~/utils'

export interface WorkItemProps {
  title?: string
  packageDownloads?: boolean
  description?: string
  tags?: string
  webHref?: string
  repositoryHref?: string
  packageHref?: string
  date?: Date
}

export function WorkItem(props: WorkItemProps) {
  const { title, packageDownloads, description, tags, webHref, repositoryHref, packageHref, date = new Date() } = props

  return (
    <div className="flex gap-2.2 sm:gap-3.7 mb-6.5">
      <div>
        <div className="relative sm:text-xs text-primary-100 italic bg-primary-700 dark:bg-primary-600 h-3.7 w-3.7 sm:h-3 sm:w-12 px-0 py-0.7 sm:py-2 flex items-center justify-center rounded-full sm:rounded arrow-left">
          <span className="hidden sm:inline">{dayjs(date).format(dateFormat.project)}</span>

          <div className="w-3.7 inline sm:hidden">
            <ClockFillIcon />
          </div>
        </div>
      </div>

      <div className="mt-0.2 text-sm">
        <h3 className="mb-1 text-primary-700 dark:text-inherit">
          {title} <PackageDownloads visible={packageDownloads} />
        </h3>

        <Tag label={tags} />

        <p className="font-medium ">{description}</p>

        <div className="flex flex-wrap gap-1 text-xs font-bold sm:text-sm dark:text-secondary">
          {webHref && (
            <a
              href={webHref}
              target="__blank"
              rel="noreferrer"
              className="inline-flex items-center transition-opacity px-1.5 py-0.7 rounded-md underline border-2 border-primary-600 dark:border-secondary bg-primary-100 dark:bg-secondary/10 hover:opacity-80"
            >
              DEMO
              <span className="inline-block w-1.7 ml-0.5">
                <ExternalLinkIcon />
              </span>
            </a>
          )}

          {repositoryHref && (
            <a
              href={repositoryHref}
              target="__blank"
              rel="noreferrer"
              className="inline-flex items-center transition-opacity px-1.5 py-0.7 rounded-md underline border-2 border-primary-600 dark:border-secondary bg-primary-100 dark:bg-secondary/10 hover:opacity-80"
            >
              REPOSITORIO
              <span className="inline-block w-1.7 ml-0.5">
                <OctocatFillIcon />
              </span>
            </a>
          )}

          {packageHref && (
            <a
              href={packageHref}
              target="__blank"
              rel="noreferrer"
              className="inline-flex items-center transition-opacity px-1.5 py-0.7 rounded-md underline border-2 border-primary-600 dark:border-secondary bg-primary-100 dark:bg-secondary/10 hover:opacity-80"
            >
              PAQUETE
              <span className="inline-block w-1.7 ml-0.5">
                <PackageFillIcon />
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
