import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/db/index'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'application/json')

  const username = req.query.username as string

  const user = await prisma.user.findFirst({
    where: {
      username,
    },
    select: {
      id: true,
      avatar: true,
      bio: true,
      email: true,
      fullname: true,
      username: true,
      createdAt: true,
      nfts: true,
    },
  })

  if (!user) {
    res.status(404).json({
      code: 404,
      error: 'User not found',
    })

    return
  }

  res.status(200).json(user)
}
