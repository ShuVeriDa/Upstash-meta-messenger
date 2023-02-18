'use client'

import {FC} from 'react';
import {getProviders, signIn} from "next-auth/react";
import {NextPage} from "next";

interface ISignInComponentProps {
  providers: Awaited<ReturnType<typeof getProviders>>
}

const SignInComponent: NextPage<ISignInComponentProps> = ({providers}) => {

  return (
    <div>
      {Object.values(providers!).map((provider) => {
        return <div key={provider.name}>
          <button onClick={() =>
            signIn(provider.id, {
              callbackUrl: process.env.VERCEL_URL || "localhost:3000"
            })
          }
          >
            Sign in with {provider.name}
          </button>
        </div>
      })}
    </div>
  );
};

export default SignInComponent