import {useRouter} from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';
import Loading from '../../components/loading';

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
    return (
      <>
        <Loading />
      </>
    );
  }

  const {post} = props;
  return (
    <Layout pageTitle={`Detail Post ${post.id}`}>
      <div className="layout pt-32 h-screen">
        <div className="h-4/5">
          <div className="">
            <h2>
              {post.id} {post.title}
            </h2>
            <p>{post.body}</p>
            <button
              className="py-2 px-5 font-semibold mt-2 bg-sky-500 rounded-md"
              onClick={() => router.replace('/posts')}>
              back
            </button>
          </div>
        </div>
      </div>
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

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    },
  };
}
