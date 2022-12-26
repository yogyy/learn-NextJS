import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/Users.module.css";

interface UserProps {
  dataUsers: Array<any>;
}

export default function Users(props: UserProps) {
  const { dataUsers } = props;
  const router = useRouter();

  return (
    <Layout pageTitle="Users Page">
      {dataUsers.map((user) => (
        // return (
        <div
          className={styles.card}
          key={user.id}
          onClick={() => router.push(`/users/${user.id}`)}
        >
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
        // );
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
