import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/db/index'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'application/json')

  const { count, page } = req.query
  const resultsPerPage = count ? parseInt(count as string) : 6
  const pageNumber = page ? parseInt(page as string) : 1

  if (req.method === 'POST') {
    const { name, description, imageUrl, price, forSale, ownerId, stock, supply } = req.body
    const nft = await prisma.nft.create({
      data: {
        name,
        imageUrl,
        description,
        price,
        forSale,
        ownerId,
        stock,
        supply,
      },
    })

    return res.status(200).json(nft)
  }

  const nfts = await prisma.nft.findMany({
    skip: resultsPerPage * pageNumber,
    take: resultsPerPage,
    include: {
      owner: {
        select: {
          id: true,
          username: true,
          avatar: true,
          fullname: true,
        },
      },
    },
  })

  res.status(200).json(nfts)
}
