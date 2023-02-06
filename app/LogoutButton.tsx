'use client'

import {FC} from 'react';

interface ILogoutButtonProps {
}

export const LogoutButton: FC<ILogoutButtonProps> = () => {
  return (
    <button className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}
    onClick={() => console.log("hello")}
    >
        Sign Out
    </button>
  );
};