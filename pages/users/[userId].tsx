import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import styles from "../../styles/Users.module.css";

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
  const { user } = props;

  if (router.isFallback) {
    return (
      <div className={styles.loadingcontainer}>
        <p className={styles.loadinp}>Loading...</p>
      </div>
    );
  }

  return (
    <Layout pageTitle={`${user.name}`}>
      <div className={styles.card}>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.website}</p>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=5"
  );
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
  const { userId } = context.params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
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
