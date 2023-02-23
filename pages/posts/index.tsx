import Link from 'next/link';
import React from 'react';
import Layout from '../../components/Layout';
import {Accent1} from '../../components/links/Accent';

interface PostProps {
  dataPosts: Array<any>;
}

export default function PostList(props: PostProps) {
  const {dataPosts} = props;
  return (
    <Layout pageTitle="Post List">
      <div className="layout pt-28">
        <h1>
          <Accent1>Post List</Accent1>
        </h1>
        {dataPosts.map((post) => {
          return (
            <div className="mt-3" key={post.id}>
              <Link href={`posts/${post.id}`}>
                <h2 className="text-xl font-semibold">
                  {post.id}. {post.title}
                </h2>
              </Link>
              <hr />
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?');
  const dataPosts = await res.json();

  return {
    props: {
      dataPosts,
    },
  };
}
