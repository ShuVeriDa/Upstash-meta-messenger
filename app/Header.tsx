
import Image from "next/image";
import {FC} from "react";
import Link from "next/link";
import {LogoutButton} from "./LogoutButton";

interface IHeaderProps {
}

export const Header: FC<IHeaderProps> = () => {

  const session = true

  if (session) return (
    <header className="stick top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm">
      <div className={'flex space-x-2'}>
        <Image className={'rounded-full mx-2 object-contain'}
               width={50}
               height={10}
               src={'https://links.papareact.com/jne'}
               alt={'Profile picture'}
        />

        <div>
          <p className={'text-blue-400'}>Logged in as: </p>
          <p className={'font-bold text-lg'}>Bashtarov Said-Muhammad</p>
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

        <Link href={'/auth/sigin'}
              className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}
        >
          Sign In
        </Link>

      </div>
    </header>
  );
};