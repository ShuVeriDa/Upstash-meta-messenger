"use client"

import {FC} from 'react';
import useSWR from "swr";
import {fetcher} from "../utils/fetchMessages";
import {MessageType} from "../typings";
import {MessageComponent} from "./MessageComponent";

interface IMessageListProps {
}

export const MessageList: FC<IMessageListProps> = () => {
  const {data: messages, error, mutate} = useSWR<MessageType[]>('api/getMessages', fetcher)
  return (
    <div className={'space-y-5 px-5 pt-8 pb-32 max-w-2xl xl:max-w-4xl mx-auto'}>
      {messages?.map(m => <MessageComponent key={m.id} message={m} />
      )}
    </div>
  );
};