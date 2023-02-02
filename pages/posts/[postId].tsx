import {useRouter} from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostProps {
  post: Post;
}

export default function PostDetail(props: PostProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading.....</h1>;
  }

  const {post} = props;
  return (
    <Layout pageTitle={`Detail Post ${post.id}`}>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>

      <button className="button-89" onClick={() => router.replace('/posts')}>
        back
      </button>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  const data = await res.json();

  const paths = data.map((post: Post) => ({
    params: {
      postId: `${post.id}`,
    },
  }));
  return {
    paths,
    fallback: true,
    // paths: [
    //   {
    //     params: { postId: "1" },
    //   },
    //   {
    //     params: { postId: "2" },
    //   },
    //   {
    //     params: { postId: "3" },
    //   },
    // ],
  };
}
interface propgetStaticProps {
  params: {
    postId: string;
  };
}
export async function getStaticProps(context: propgetStaticProps) {
  const {postId} = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
}
