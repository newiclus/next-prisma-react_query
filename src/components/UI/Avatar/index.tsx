import s from './Avatar.module.css'

import React from 'react'
import Image from 'next/image'
import ClassNames from 'classnames'

import Icon from '@/components/UI/Icon'

interface AvatarProps {
  /** CSS height and width together in px */
  size?: Number
  /** Avatar source `required` */
  src?: string
  /** Icon name based on Google Icons (if you don't pass a image source) */
  nameIcon?: string
  /** Customs styles by tailwind classes */
  customStyles?: string
  /** Shows the verified ribbon */
  verified?: boolean
}

/**
 * @function Avatar component that renders an avatar
 * @param  {AvatarProps} props      Component props
 * @param  {String} props.src       Avatar source or icon Name `required`
 * @param  {String} props.nameIcon  Icon name based on Google Icons (if you don't pass a image source)
 * @param  {Number} props.size      Avatar size in pixels
 * @param  {String} props.customStyles Customs styles by tailwind classes
 * @param  {Boolean} props.verified Shows the verified ribbon
 * @return {JSX.Element} Avatar component
 * @example
 * ```jsx
 * <Avatar src="https://avatars0.githubusercontent.com/u/1234" size={32} />
 * ```
 */
export default function Avatar({
  src,
  size = 16,
  verified,
  nameIcon = 'person',
  customStyles,
}: AvatarProps): JSX.Element {
  const arrStyles = customStyles ? customStyles.trim().split(' ') : ''
  const cn = ClassNames(s.body, arrStyles)
  const gSize = size + 'px'

  return (
    <aside className={s.content}>
      <figure className={cn} style={{ width: gSize, height: gSize }}>
        {src ? (
          <Image src={src} alt="Background profile" />
        ) : (
          <Icon name={nameIcon} size={Number(size) * 0.65 + 'px'} customStyles="text-indigo-400" />
        )}
      </figure>
      {verified && (
        <p className={s.verified}>
          <Icon name="verified" />
        </p>
      )}
    </aside>
  )
}
