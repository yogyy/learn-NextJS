import {useRouter} from 'next/router';
import Layout from '../../../components/Layout';

export default function ProductDetail() {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <Layout pageTitle={`product - ${productId}`}>
      <div className="produkid" style={{paddingTop: '80px'}}>
        <h1>details about product {productId}</h1>
        <button onClick={() => router.back()}>back</button>
      </div>
    </Layout>
  );
}
