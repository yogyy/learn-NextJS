import {useRouter} from 'next/router';
import Layout from '../../components/Layout';

interface UserProps {
  dataUsers: Array<any>;
}

export default function Users(props: UserProps) {
  const {dataUsers} = props;
  const router = useRouter();

  return (
    <Layout pageTitle={`Users List Page`}>
      <div className="layout pt-28">
        <div className="flex flex-col gap-5 font-serif ">
          {dataUsers.map((user) => (
            <div className="flex flex-row gap-5 min-w-max" key={user.id}>
              <div
                className="hover:text-sky-500 cursor-pointer"
                onClick={() => router.push(`/users/${user.id}`)}>
                <p>name: {user.name}</p>
                <p>email: {user.email}</p>
                <hr />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
