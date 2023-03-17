import React, {useEffect, useState} from 'react';

export default function Movie() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('/api/post')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return <div>{data}</div>;
}

// export async function getServerSideProps(movie) {
//   return {
//     props: {},
//   };
// }
