import {NextApiRequest, NextApiResponse} from 'next';
import {comments} from '../../../data/comments';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(comments);
  } else if (req.method === 'POST') {
    const comment = req.body.comment;
    const newComment = {
      id: Date.now(),
      text: comment,
    };
    comments.push(newComment);
    res.status(201).json(newComment);
  } else if (req.method === 'PATCH') {
    const commentId =
      typeof req.query.commentId === 'string' ? parseInt(req.query.commentId) : undefined;
    const updatedComment = req.body.comment;
    const index = comments.findIndex((comment) => comment.id === commentId);
    if (index === -1) {
      res.status(404).json({message: 'Comment not found'});
    } else {
      comments[index].text = updatedComment;
      res.status(200).json(comments[index]);
    }
  } else {
    res.status(405).json({message: 'Method not allowed'});
  }
}
