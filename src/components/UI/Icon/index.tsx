import React from 'react'
import ClassNames from 'classnames'

import s from './Icon.module.css'

export interface IconProps {
  /** name of the icon based on Google Icons `-required` */
  name: string
  /** Outlined icon `-optional` */
  outlined?: boolean
  /** Size of the icon in pixels. `-optional` */
  size?: string
  /** Customs styles by tailwind classes */
  customStyles?: string
}

/**
 * Icon component is a `svg|font` element which is based on the https://fonts.google.com/icons
 * @param {IconProps} props           - Component properties
 * @param {String} props.name         - name of the icon based on Google Icons `-required`
 * @param {Boolean} props.outlined    - Outlined icon `-optional`
 * @param {String} props.size         - Size of the icon in pixels. `-optional`
 * @param {String} props.customStyles - Custom styles by Tailwind classes
 * @returns {JSX.Element} Icon Component
 * @example
 * ```jsx
 *  <Icon name="mail" customStyles="text-blue-600" size={14} />
 * ```
 */
export default function Icon({
  name,
  outlined,
  size = '16px',
  customStyles,
}: IconProps): JSX.Element {
  const arrStyles = customStyles ? customStyles.trim().split(' ') : ''
  const cn = ClassNames('material-symbols-outlined', 'leading-normal', arrStyles)

  return (
    <span className={s.content}>
      <span
        className={cn}
        style={{ fontVariationSettings: `'FILL' ${outlined ? 0 : 1}`, fontSize: size }}
      >
        {name}
      </span>
    </span>
  )
}
