import { useRouter } from "next/router";

export default function Review() {
  const router = useRouter();
  const { productId } = router.query;
  return (
    <div>
      <h1>Review for product {productId}</h1>
    </div>
  );
}
