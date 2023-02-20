import Layout from '../../components/Layout';

export default function NewsArticleList({beritaa}: any) {
  return (
    <Layout pageTitle="Berita coy">
      <div className="pt-24" />
      <div className="layout">
        <h1>List of News Articles</h1>
        {beritaa.map((berita: any) => {
          return (
            <div className="my-3" key={berita.id}>
              <h2 className="text-base">
                no: {berita.id} {berita.title}
              </h2>
              <p className="text-base">{berita.description}</p>
              <p>tags: {berita.category}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:9999/news');
  const data = await res.json();

  return {
    props: {
      beritaa: data,
    },
  };
}
