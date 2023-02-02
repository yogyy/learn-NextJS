import Link from 'next/link';
import Layout from '../../components/Layout';

export default function ProductList() {
  return (
    <div className="product-box">
      <Layout pageTitle={`product`}>
        <div style={{padding: '80px'}} className="produklist">
          <Link href="/product/1">product 1</Link>
          <Link href="/product/2">product 2</Link>
          <Link href="/product/3" replace>
            product 3
          </Link>
        </div>
      </Layout>
    </div>
  );
}
