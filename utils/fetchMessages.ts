import {MessageType} from "../typings";

export const fetcher = async () => {
  const res = await fetch('api/getMessages')
  const data = await res.json()
  const messages: MessageType[] = data.messages

  return messages
}