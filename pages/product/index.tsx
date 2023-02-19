// import clsx from 'clsx';
import Link from 'next/link';
import Layout from '../../components/Layout';
// import UnstyledLink from '../../components/links/UnstyledLink';

export default function ProductList({products}: any) {
  // const items = [];
  // for (let i = 0; i < 50; i++) {
  //   items.push(`product ${i + 1}`);
  // }
  // const limitedItems = items.slice(0, 30);
  // return (
  //   <div className="product-box">
  //     <Layout pageTitle={`product`}>
  //       <div className="pt-24 layout">
  //         <div className="pt-5 grid grid-cols-3 gap-4">
  //           {limitedItems.map((item, index) => (
  //             <UnstyledLink
  //               key={index}
  //               href={`/product/${index + 1}`}
  //               className={clsx(
  //                 'inline-flex items-center gap-1 text-sm font-medium md:text-base',
  //                 'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
  //                 'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
  //                 'transition-colors'
  //               )}>
  //               {item}
  //             </UnstyledLink>
  //           ))}
  //         </div>
  //       </div>
  //     </Layout>
  //   </div>
  // );
  return (
    <>
      <Layout pageTitle="Product">
        <div className="layout pt-28 min-h-full">
          <h1>List Products</h1>
          {products.map((product: any) => {
            return (
              <div className="mt-5" key={product.id}>
                <Link href={`product/${product.id}`}>
                  {product.id} {product.title} price:{product.price}
                </Link>
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
  const res = await fetch('http://localhost:9999/products');
  const data = await res.json();

  return {
    props: {
      products: data,
    },
    revalidate: 30,
  };
}
