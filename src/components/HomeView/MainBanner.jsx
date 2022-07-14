/* eslint-disable @next/next/no-img-element */
import s from './Home.module.css'

import React from 'react'

import NftCard from '@/components/NftCard'
import { ButtonLink } from '@/components/UI/Button'

const NFTDATA = {
  id: 'cl4m5p4y90085n8v3b38sofqk',
  name: 'Sea Campion',
  imageUrl:
    'https://img.seadn.io/files/467dd34bc0bef1b4e8a92c7c869641d1.jpg?fit=max&auto=format&h=550&w=550',
  description: 'Destruction of Sigmoid Colon, Percutaneous Endoscopic Approach',
  price: 44.31,
  forSale: false,
  ownerId: 'cl4m4iz9p0156iav3rmohjxbj',
  stock: 41,
  supply: 71,
  createdAt: '2022-06-20T03:06:42.129Z',
  updatedAt: '2022-06-20T03:06:42.129Z',
  owner: {
    id: 'cl4m4iz9p0156iav3rmohjxbj',
    username: 'jstetlye6',
    avatar: 'https://robohash.org/sitrepellendusmagnam.jpg?size=500x500&set=set1',
    fullname: 'Janith Stetlye',
  },
}

export default function MainBanner() {
  return (
    <section className={s.mainBanner}>
      <div className="limit flex flex-row py-6">
        <div className={s.bannerText}>
          <h1 className="font-black text-3xl mt-8">
            Discover, collect, and sell extraordinary NFTs
          </h1>

          <p className="text-lg leading-relaxed pt-3">
            Nft Market is the world&apos;s first and largest NFT marketplace
          </p>

          <div className="py-6">
            <ButtonLink className={s.bannerButton} href="#nft-create">
              Explore
            </ButtonLink>
          </div>
        </div>

        <div className={s.bannerCard}>
          <NftCard nft={NFTDATA} />
        </div>
      </div>
    </section>
  )
}
