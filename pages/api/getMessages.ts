// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import redis from "../../redis";
import {MessageType} from "../../typings";

type Data = {
  messages: MessageType[]
}

type ErrorData = {
  body: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
  if(req.method !== 'GET') {
    res.status(405).json({ body: 'Method Not Allowed' })
    return
  }

  const messagesRes = await redis.hvals('messages')
  const messages: MessageType[] = messagesRes
      .map(message => JSON.parse(message))
      .sort((a, b) => b.created_at - a.created_at)

  res.status(200).json({ messages  })
}
