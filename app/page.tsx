import {NextPage} from "next";
import {MessageList} from "./MessageList";
import {ChatInput} from "./ChatInput";

interface IPageProps {
}

const HomePage: NextPage<IPageProps> = () => {
  return (
    <main>
      {/*Message list*/}
      <MessageList />
      <ChatInput />
    </main>
  );
};
export default HomePage