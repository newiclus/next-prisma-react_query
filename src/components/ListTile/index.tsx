import s from './ListTile.module.css'

import { ReactNode } from 'react'
import Link from 'next/link'

type Props = {
  leading?: ReactNode
  title: string
  subtitle?: ReactNode
  trailing?: ReactNode
  href?: string
}

export default function ListTile({ leading, title, subtitle, trailing, href }: Props) {
  return (
    <aside className={s.content}>
      {href && (
        <Link href={href}>
          <a className={s.link} />
        </Link>
      )}
      <div className="flex-none mr-2">{leading}</div>

      <div className="flex-1">
        <h2 className={s.title}>{title}</h2>
        <h3 className="text-sm">{subtitle}</h3>
      </div>

      <div className="flex-none ml-2">{trailing}</div>
    </aside>
  )
}
