import Image from "next/image";
import Link from "next/link";
import {LogoutButton} from "./LogoutButton";
import {getServerSession} from "next-auth";

interface IHeaderProps {
}

export const Header: () => Promise<JSX.Element> = async () => {

  const session = await getServerSession()
  // const session = true

  if (session) return (
    <header className="stick top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm">
      <div className={'flex space-x-2'}>
        <Image className={'rounded-full mx-2 object-contain'}
               width={50}
               height={10}
               src={session.user?.image!}
               alt={'Profile picture'}
               unoptimized
        />

        <div>
          <p className={'text-blue-400'}>Logged in as: </p>
          <p className={'font-bold text-lg'}>{session.user?.name}</p>
        </div>


      </div>

      <LogoutButton />
    </header>
  )

  return (
    <header className="stick top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm">
      <div className={'flex flex-col items-center space-y-5'}>
        <div className={'flex space-x-2 items-center'}>
          <Image src={'https://links.papareact.com/jne'} height={10} width={50} alt={'logo'} />

          <p className={'text-blue-400'}>
            Welcome to Meta Messenger
          </p>
        </div>

        <Link href={'/auth/signin'}
              className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}
        >
          Sign In
        </Link>

      </div>
    </header>
  );
};