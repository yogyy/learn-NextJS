import type {NextApiRequest, NextApiResponse} from 'next';
type Data = {
  name: string;
};

export default function post(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200);
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify([
      {
        name: 'yogi',
        website: 'localhost/300',
      },
    ])
  );
}
