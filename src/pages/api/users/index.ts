import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/db/index'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'application/json')

  const users = await prisma.user.findMany({
    select: {
      id: true,
      avatar: true,
      bio: true,
      email: true,
      fullname: true,
      username: true,
      createdAt: true,
    },
  })

  res.status(200).json(users)
}
