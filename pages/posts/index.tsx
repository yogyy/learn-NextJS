import Link from 'next/link';
import React from 'react';
import Layout from '../../components/Layout';

interface PostProps {
  dataPosts: Array<any>;
}

export default function PostList(props: PostProps) {
  const {dataPosts} = props;
  return (
    <Layout pageTitle="Post List">
      <h1>Post List</h1>
      {dataPosts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`}>
              <h2>
                {post.id} {post.title}
              </h2>
            </Link>
            <hr />
          </div>
        );
      })}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const dataPosts = await res.json();

  return {
    props: {
      dataPosts,
    },
  };
}
