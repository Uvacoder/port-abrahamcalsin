import { Client } from '@notionhq/client'

interface notionCredentials {
  notionApiKey: string
  notionDatabaseId: string
  sorts?: [any]
  filter?: any
}

export async function notion(credentials: notionCredentials) {
  const { notionApiKey, notionDatabaseId, sorts, filter } = credentials

  const client = new Client({
    auth: notionApiKey,
  })

  const response = await client.databases.query({
    database_id: notionDatabaseId,
    sorts,
    filter,
  })

  return response
}
