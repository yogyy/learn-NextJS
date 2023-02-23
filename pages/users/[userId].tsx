import {useRouter} from 'next/router';
import Layout from '../../components/Layout';
import Loading from '../../components/loading';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}
interface UserDetailProps {
  user: User;
}

export default function UserDetail(props: UserDetailProps) {
  const router = useRouter();
  const {user} = props;

  if (router.isFallback) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <Layout pageTitle={`${user.name}`}>
      <div className="layout py-28">
        <button
          className="bg-blue-200 dark:bg-blue-900 font-semibold px-2 py-1 rounded-md"
          onClick={() => router.back()}>
          back
        </button>
        <div className="h-full w-1/3 p-5 mt-5 rounded-md bg-blue-200 dark:bg-blue-900">
          <div className="flex flex-col gap-3 font-semibold">
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5');
  const dataUsers = await res.json();

  const paths = dataUsers.map((user: User) => ({
    params: {
      userId: `${user.id}`,
    },
  }));
  return {
    paths,
    fallback: true,
  };
}

interface GetStaticProps {
  params: {
    userId: string;
  };
}
export async function getStaticProps(context: GetStaticProps) {
  const {userId} = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const user = await res.json();

  if (!user.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user,
    },
  };
}
