// catch all route
import {useRouter} from 'next/router';

export default function Docs() {
  const router = useRouter();
  const {params = []} = router.query;
  console.log(params);

  if (params.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params[0]} and concept of {params[1]}
        <button>home</button>
      </h1>
    );
  } else if (params.length === 1) {
    return <h1>Viewing docs for feature {params[0]} </h1>;
  }

  return (
    <div>
      <h1>Docs home page</h1>
      <button onClick={() => router.push('/')}>home</button>
    </div>
  );
}
