import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/db/index'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'application/json')

  const { count, page } = req.query
  const resultsPerPage = count ? parseInt(count as string) : 6
  const pageNumber = page ? parseInt(page as string) : 1

  const users = await prisma.user.findMany({
    skip: resultsPerPage * pageNumber,
    take: resultsPerPage,
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
