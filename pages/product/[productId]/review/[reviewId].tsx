import {useRouter} from 'next/router';

export default function ProductIdindex() {
  const router = useRouter();
  const {productId, reviewId} = router.query;
  return (
    <div>
      <h1>
        Review {reviewId} for details {productId}
      </h1>
    </div>
  );
}
