import clsx from 'clsx';
import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';
import Layout from '../../components/Layout';
import Accent from '../../components/links/Accent';
import Loading from '../../components/loading';

type NewType = {
  id: number;
  title: string;
  body: string;
};

// type Post = NewType;
// type BlogProps = {
//   dataBlog: Post[];
// };

// export default function Blog(props: BlogProps) {
//   const {dataBlog} = props;
//   return (
//     <Layout pageTitle={'Blog Page'}>
//       <div className={styles.div}>
//         <h1>List Blog</h1>
//         {dataBlog.map((blog) => (
//           <div key={blog.id} className={styles.card}>
//             <h3>{blog.title}</h3>
//             <p>{blog.body}</p>
//           </div>
//         ))}
//       </div>
//     </Layout>
//   );
// }

// export async function getServerSideProps() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
//   const dataBlog = await res.json();
//   return {
//     props: {
//       dataBlog,
//     },
//   };
// }

export default function Blog() {
  const router = useRouter();
  const [dataBlog, setDataBlog] = useState<NewType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=21');
      const data = await res.json();
      setDataBlog(data);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  return (
    <Layout pageTitle={'Blog Page'}>
      <div className={`text-gray-500 dark:text-gray-300 layout pt-24`}>
        <h1>
          <Accent>List Blog</Accent>
        </h1>
        {isLoading ? (
          <div>
            <Loading />
          </div>
        ) : (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3 ">
            {dataBlog.map((blog) => (
              <div key={blog.id} className="mt-4">
                <div
                  onClick={() => router.push(`/blogs/${blog.id}`)}
                  className={clsx(
                    'bg-gray-100 dark:bg-gray-700  p-5 rounded-lg h-full flex flex-col justify-between',
                    'hover:cursor-pointer hover:shadow-sky-600 shadow-lg'
                  )}>
                  <h2 className="text-sky-500 text-xl">{blog.title}</h2>
                  <p className="mt-5">{blog.body}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
