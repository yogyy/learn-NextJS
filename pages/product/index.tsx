import Link from 'next/link';
import Layout from '../../components/Layout';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}
interface ProductDetailProps {
  products: Product[];
}

export default function ProductList({products}: ProductDetailProps) {
  return (
    <>
      <Layout pageTitle="Product">
        <div className="layout pt-28 min-h-full">
          <h1>List Products</h1>
          {products.map((product: Product) => {
            return (
              <div className="mt-5" key={product.id}>
                <Link href={`product/${product.id}`}>
                  {product.id} {product.title} price:{product.price}
                </Link>
                <br />
                {product.description}
              </div>
            );
          })}
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  console.log('generating / regenerating productlist');
  const res = await fetch('https://json-server-seven-flax.vercel.app/products');
  const data = await res.json();

  return {
    props: {
      products: data,
    },
    revalidate: 30,
  };
}
