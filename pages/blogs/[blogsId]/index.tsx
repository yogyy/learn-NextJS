import clsx from 'clsx';
import {useRouter} from 'next/router';
import Layout from '../../../components/Layout';
import Loading from '../../../components/loading';

interface Blog {
  id: number;
  title: string;
  body: string;
}
interface UserDetailProps {
  blog: Blog;
}

export default function UserDetail(props: UserDetailProps) {
  const router = useRouter();
  const {blog} = props;

  return (
    <Layout pageTitle={`blog post - ${blog.title}`}>
      <div className="layout py-28">
        <button
          type="button"
          className={clsx(
            'bg-blue-200 dark:bg-blue-900 font-semibold px-2 py-1 rounded-md',
            'hover:text-sky-200'
          )}
          onClick={() => router.push('/blogs')}>
          back
        </button>
        {router.isFallback && <Loading />}
        {!router.isFallback && (
          <div className="h-full w-1/3 p-5 mt-5 rounded-md bg-blue-200 dark:bg-blue-900">
            <div className="flex flex-col gap-3 font-semibold">
              <p>{blog.title}</p>
              <p>{blog.body}</p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  const dataUsers = await res.json();

  const paths = dataUsers.map((blog: Blog) => ({
    params: {
      blogsId: `${blog.id}`,
    },
  }));
  return {
    paths,
    fallback: true,
  };
}

interface GetStaticProps {
  params: {
    blogsId: string;
  };
}
export async function getStaticProps(context: GetStaticProps) {
  const {blogsId} = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${blogsId}`);
  const blog = await res.json();

  if (!blog.id) {
    console.error(`No blog found for ID ${blogsId}`, blog);
    return {
      notFound: true,
    };
  }

  console.log('Blog data:', blog);

  return {
    props: {
      blog,
    },
  };
}
