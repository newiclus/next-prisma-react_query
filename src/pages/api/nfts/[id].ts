import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/db/index'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'application/json')

  const id = req.query.id as string

  const nft = await prisma.nft.findFirst({
    where: {
      id,
    },
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

  if (!nft) {
    res.status(404).json({
      code: 404,
      error: 'nft not found',
    })

    return
  }

  res.status(200).json(nft)
}
