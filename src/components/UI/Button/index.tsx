import s from './Button.module.css'

import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import Link from 'next/link'
import ClassNames from 'classnames'

interface ButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string
}

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

function ButtonLink({ className, href, children, ...props }: ButtonLinkProps) {
  const cn = ClassNames(s.base, className)

  return (
    <Link href={href} passHref>
      <a className={cn} {...props}>
        {children}
      </a>
    </Link>
  )
}

function Button({ className, children, ...props }: ButtonBaseProps) {
  const cn = ClassNames(s.base, className)

  return (
    <button className={cn} {...props}>
      {children}
    </button>
  )
}

export { Button, ButtonLink }
