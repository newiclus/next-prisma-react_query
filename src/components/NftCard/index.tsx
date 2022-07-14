import s from './NftCard.module.css'

import Image from 'next/image'
import Link from 'next/link'
import { Nft } from '@prisma/client'
import classNames from 'classnames'

import Avatar from '@/components/UI/Avatar'
import ListTile from '@/components/ListTile/index'

interface NftProps extends Nft {
  owner: {
    id: string
    username: string
    avatar: string
    fullname: string
    overText: string
  }
}

export default function NftCard({ nft, overText }: { nft: NftProps; overText?: boolean }) {
  const cn = classNames(s.info, { [s.overlay]: overText })

  return (
    <div className={s.content}>
      <Link href={`/nfts/${nft.id}`}>
        <a>
          <Image
            src={nft.imageUrl}
            alt={nft.name}
            width={382}
            height={overText ? 448 : 382}
            layout="responsive"
          />
        </a>
      </Link>

      <div className={cn}>
        <ListTile
          href={`/users/${nft.owner.username}`}
          leading={<Avatar src={nft.owner.avatar} className="bg-orange-200" size={38} />}
          title={nft.name}
          subtitle={
            <>
              by <strong>{nft.owner.username}</strong>
            </>
          }
        />
      </div>
    </div>
  )
}
