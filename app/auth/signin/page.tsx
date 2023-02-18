import {getProviders} from "next-auth/react";
import Image from "next/image";
import SignInComponent from "./signInComponent";

interface ISignInPageProps {
}

const SignInPage: () => Promise<JSX.Element> = async () => {
  const providers = await getProviders()
  return (
    <div className={'grid justify-center'}>
      <div>
        <Image className={'rounded-full mx-2 object-cover'}
               src={'https://links.papareact.com/161'}
               alt={'Profile picture'}
               width={700}
               height={700}
        />
      </div>


      <SignInComponent providers={providers}/>
    </div>
  );
};

export default SignInPage