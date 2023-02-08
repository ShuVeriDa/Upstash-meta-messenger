'use client'

import {FC, FormEvent, useState} from 'react';
import {v4 as uuid} from 'uuid'
import {MessageType} from "../typings";

interface IChatInputProps {
}

export const ChatInput: FC<IChatInputProps> = () => {
  const [input, setInput] = useState('')

  const addMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!input) return

    const messageToSend = input

    setInput('')

    const id = uuid()

    const message: MessageType = {
      id,
      message: messageToSend,
      created_at: Date.now(),
      username: "ShuVeriDa",
      profilePic: 'https://t4.ftcdn.net/jpg/03/21/43/07/360_F_321430761_qQi0CU9tzI5w1k1vJgdA02LMtXtsXvJE.jpg',
      email: 'bashtarov@outlook.com'
    }

    const uploadMesasgeToUpstash = async () => {
      const res = await fetch('api/addMessage', {
        method: "Post",
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify({
          message
        })
      })

      const data = await res.json()
      console.log('MESSAGE ADDED >>>', data)
    }

    uploadMesasgeToUpstash()
  }

  return (
    <form onSubmit={addMessage} className={'fixed bottom-0 z-50 w-full flex px-10 py-5 space-x-2 border-t border-gray-900'}>
      <input type="text"
             value={input}
             onChange={(e) => setInput(e.target.value)}
             placeholder={'Enter message here...'}
             className={"flex-1 rounded border border-gray-300 " +
               "focus:outline-none focus:ring-2 focus:ring-blue-600 " +
               "focus:border-transparent px-5 py-3 disabled:opacity-50 " +
               "disabled:cursor-not-allowed"}
      />
      <button type={'submit'}
              disabled={!input}
              className={'bg-blue-500 hover:bg-blue-700 text-white font-bold ' +
                'py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed'
              }
      >
        Send
      </button>
    </form>
  );
};
