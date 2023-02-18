import {NextPage} from "next";
import {MessageList} from "./MessageList";
import {ChatInput} from "./ChatInput";
import {MessageType} from "../typings";
import {getServerSession} from "next-auth";
import {Providers} from "./providers";


interface IPageProps {
}

const HomePage: () => Promise<JSX.Element> = async () => {

  const data = await fetch(`${process.env.VERCEL_URL || 'http://localhost:3000'}/api/getMessages`)
    .then(res => res.json())

  const messages: MessageType[] = data.messages
  const session = await getServerSession()

  return (
    <Providers session={session}>
      <main>
        <MessageList initialMessages={messages}/>
        <ChatInput session={session}/>
      </main>
    </Providers>
  );
};
export default HomePage