import {NextApiRequest, NextApiResponse} from 'next';
import {comments} from '../../../data/comments';

interface CustomRequest extends NextApiRequest {
  query: {
    commentId: string;
  };
}

export default function handler(req: CustomRequest, res: NextApiResponse) {
  const {commentId} = req.query;
  if (req.method === 'GET') {
    const parsedCommentId = parseInt(commentId);
    const comment = comments.find((comment) => comment.id === parsedCommentId);
    res.status(200).json(comment);
  } else if (req.method === 'DELETE') {
    const parsedCommentId = parseInt(commentId);
    const deletedComment = comments.find((comment) => comment.id === parsedCommentId);
    const index = comments.findIndex((comment) => comment.id === parsedCommentId);
    comments.splice(index, 1);
    res.status(200).json(deletedComment);
  }
}
