import {useEffect, useState} from 'react';

interface DashboardData {
  posts: number;
  likes: number;
  follower: number;
  following: number;
}

const defaultDashboardData = {
  posts: 0,
  likes: 0,
  follower: 0,
  following: 0,
};

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState<DashboardData>(
    defaultDashboardData as DashboardData
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchDashboardData() {
      const res = await fetch('http://localhost:9999/dashboard');
      const data = await res.json();
      setDashboardData(data);
      setIsLoading(false);
    }
    fetchDashboardData();
  }, []);

  if (isLoading) {
    return <h2>loading...</h2>;
  }

  return (
    <div className="layout">
      <h2>Dashboard</h2>
      <h3>Posts - {dashboardData.posts}</h3>
      <h3>Likes - {dashboardData.likes}</h3>
      <h3>Follower - {dashboardData.follower}</h3>
      <h3>Following - {dashboardData.following}</h3>
    </div>
  );
}
