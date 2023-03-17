import {signIn, useSession} from 'next-auth/react';

const Signin = () => {
  const {data: session, status} = useSession();
  if (status === 'loading') {
    return <>Checking Authentication ...</>;
  }
  if (session) {
    window.close();
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="font-bold"
        onClick={(e) => {
          e.preventDefault();
          signIn('github');
        }}>
        Sign in With Github
      </button>
    </div>
  );
};

export default Signin;
