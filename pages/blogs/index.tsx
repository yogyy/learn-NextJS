import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/Blog.module.css";

type NewType = {
  id: number;
  title: string;
  body: string;
};

type Post = NewType;
type BlogProps = {
  dataBlog: Post[];
};

export default function Blog(props: BlogProps) {
  const { dataBlog } = props;
  return (
    <Layout pageTitle={"Blog Page"}>
      <div>
        {dataBlog.map((blog) => (
          <div key={blog.id} className={styles.card}>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataBlog = await res.json();
  return {
    props: {
      dataBlog,
    },
  };
}
