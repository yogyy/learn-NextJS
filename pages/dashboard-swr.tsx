import useSWR from 'swr';

const fetcher = async () => {
  const res = await fetch('https://json-server-seven-flax.vercel.app/dashboard');
  const data = await res.json();
  return data;
};

interface DashboardData {
  posts: number;
  likes: number;
  follower: number;
  following: number;
}

export default function DashboardSwr() {
  const {data, error} = useSWR<DashboardData>('dashboard', fetcher);

  if (error) return 'A error occured ';
  if (!data) return 'Sabar...';

  return (
    <div className="layout">
      <h2>Dashboard</h2>
      <p>Posts - {data.posts}</p>
      <p>Likes - {data.likes}</p>
      <p>Follower - {data.follower}</p>
      <p>Following - {data.following}</p>
    </div>
  );
}
