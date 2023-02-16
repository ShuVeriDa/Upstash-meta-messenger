"use client"

import {FC, useEffect} from 'react';
import useSWR from "swr";
import {fetcher} from "../utils/fetchMessages";
import {MessageType} from "../typings";
import {MessageComponent} from "./MessageComponent";
import {clientPusher} from "../pusher";

interface IMessageListProps {
}

export const MessageList: FC<IMessageListProps> = () => {
  const {data: messages, error, mutate} = useSWR<MessageType[]>('api/getMessages', fetcher)

  useEffect(() => {
    const channel = clientPusher.subscribe('messages')

    channel.bind('new-message', async (data: MessageType) => {
      //if you sent the message, no need to update cache
      if (messages?.find((message) => message.id === data.id)) return

      if (!messages) {
        mutate(fetcher)
      } else {
        mutate(fetcher, {
          optimisticData: [data, ...messages!],
          rollbackOnError: true
        })
      }
    })
  }, [messages, mutate, clientPusher])

  return (
    <div className={'space-y-5 px-5 pt-8 pb-32 max-w-2xl xl:max-w-4xl mx-auto'}>
      {messages?.map(m => <MessageComponent key={m.id} message={m}/>
      )}
    </div>
  );
};