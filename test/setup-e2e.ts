import { PrismaClient } from '@prisma/client'
import { randomUUID } from 'node:crypto'
import 'dotenv/config'
import { execSync } from 'node:child_process'

const prisma = new PrismaClient()

function generateUniqueDataBaseUrl(schemaId) {
  if (!process.env.DATABASE_URL) {
    throw new Error('Please provider a DATABASE_URL environment')
  }
  const url = new URL(process.env.DATABASE_URL)

  url.searchParams.set('schema', schemaId)

  return url.toString()
}

const databaseURL = generateUniqueDataBaseUrl(randomUUID())

beforeAll(async () => {
  process.env.DATABASE_URL = databaseURL

  execSync('npx prisma migrate deploy')
})

afterAll(async () => {
  await prisma.$executeRawUnsafe(
    `DROP SCHEMA IF EXISTS "${databaseURL}" CASCADE`,
  )
  await prisma.$disconnect()
})
