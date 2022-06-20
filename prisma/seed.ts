import { PrismaClient, Prisma } from '@prisma/client'
import { SampleUsers, SampleNfts } from './sampleData'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = SampleUsers
const nftData: Prisma.NftCreateInput[] = SampleNfts

async function main() {
  console.log(`Start seeding ...`)

  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }

  for (const n of nftData) {
    const nft = await prisma.nft.create({
      data: n,
    })
    console.log(`Created nft with id: ${nft.id}`)
  }

  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
