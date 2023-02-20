import Link from 'next/link';
import Layout from '../../components/Layout';

interface Article {
  id: number;
  title: string;
  description: string;
  category: string;
}

interface ArticleListByCategoryProps {
  articles: Article[];
  category: string;
}

export default function ArticleListByCategory({articles, category}: ArticleListByCategoryProps) {
  return (
    <>
      <Layout pageTitle={`News by Category : ${category}`}>
        <div className="pt-28" />
        <div className="layout min-h-main">
          <h1>Showing news for Category: {category}</h1>
          {articles.map((article) => {
            return (
              <div key={article.id}>
                <h2>
                  {article.id} {article.title}
                </h2>
                <p>{article.description}</p>
                <hr />
              </div>
            );
          })}
          <Link href={'/news'}>back</Link>
        </div>
      </Layout>
    </>
  );
}

interface ssrProps {
  params: {
    category: string;
  };
}

export async function getServerSideProps(context: ssrProps) {
  const {category} = context.params;
  const {req, res, query}: any = context;
  console.log(query);
  console.log(req.headers.cookie);
  res.setHeader('Set-Cookie', ['name=yogyy']);

  const response = await fetch(`http://localhost:9999/news?category=${category}`);
  const data = await response.json();

  if (data.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      articles: data,
      category,
    },
  };
}
