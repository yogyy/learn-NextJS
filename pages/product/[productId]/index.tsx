import clsx from 'clsx';
import {useRouter} from 'next/router';
import Layout from '../../../components/Layout';
import Loading from '../../../components/loading';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}
interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({product}: ProductDetailProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }
  return (
    <Layout pageTitle={`product - ${product.id}`}>
      <div className="layout pt-32">
        <div className="produkid flex flex-col">
          <h1 className="text-2xl">details about product {product.id}</h1>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p className="underline font-semibold">price : {product.price}</p>
          <button
            className={clsx(
              'mt-5 w-fit',
              'inline-flex items-center gap-1 text-sm font-medium md:text-base',
              ' text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
              'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
              'transition-colors'
            )}
            onClick={() => router.back()}>
            back
          </button>
        </div>
      </div>
    </Layout>
  );
}

interface GetStaticProps {
  params: {
    productId: string;
  };
}

export async function getStaticProps(context: GetStaticProps) {
  const {productId} = context.params;
  const res = await fetch(`https://json-server-seven-flax.vercel.app/products/${productId}`);
  const data = await res.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product: data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{params: {productId: '1'}}],
    fallback: true,
  };
}
