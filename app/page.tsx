import {NextPage} from "next";
import {MessageList} from "./MessageList";
import {ChatInput} from "./ChatInput";
import {MessageType} from "../typings";

interface IPageProps {
}

const HomePage: () => Promise<JSX.Element> = async () => {

  const data = await fetch(`${process.env.VERCEL_URL || 'http://localhost:3000'}/api/getMessages`)
    .then(res => res.json())

  const messages: MessageType[] = data.messages


  return (
    <main>
      <MessageList initialMessages={messages}/>
      <ChatInput/>
    </main>
  );
};
export default HomePage