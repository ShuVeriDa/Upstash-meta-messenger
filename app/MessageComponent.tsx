import {FC} from 'react';
import {MessageType} from "../typings";
import Image from "next/image";


interface IMessageComponentProps {
  key: string
  message: MessageType
}

export const MessageComponent: FC<IMessageComponentProps> = ({message}) => {
  const isUser = true
  return (
    <div className={`flex w-fit ${isUser && 'ml-auto'}`}>
      <div className={`flex-shrink-0 ${isUser && "order-2"}`}>
        <Image unoptimized
               className={'rounded-full mx-2'}
               src={message.profilePic}
               width={50}
               height={20}
               alt={"Profile Picture"}
        />
      </div>

      <div>
        <p className={`text-[0.65rem] px-[2px] pb-[2px] ${isUser ? 'text-blue-400 text-right' 
          : 'text-red-400 text-left'}`}
        >{message.username}</p>

        <div className={'flex items-end'}>
          <div className={`px-3 py-2 rounded-lg w-fit text-white bg-red-400 ${isUser ? "bg-blue-400 ml-auto order-2" : "bg-red-400"}`}>
            <p className={'text-[0.65.rem] px-[2px] pb-[2px]'}>{message.message}</p>
          </div>

          <p className={`text-[0.65rem] italic px-2 text-gray-300 ${isUser && 'text-right'}`}>{new Date(message.created_at).toLocaleString()}</p>

        </div>
      </div>
    </div>
  );
};