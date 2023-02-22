import {useState} from 'react';

export default function CommentPage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const fetchComments = async () => {
    const response = await fetch('/api/comments');
    const data = await response.json();
    setComments(data);
  };

  const submitComment = async () => {
    if (!comment) {
      // Do not submit empty comments
      return console.warn('empty comment');
    }
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({comment}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
    setComment('');
    fetchComments();
  };

  const deleteComment = async (commentId: number) => {
    await fetch(`/api/comments/${commentId}`, {
      method: 'DELETE',
    });
    fetchComments();
  };

  return (
    <>
      <div className="flex gap-5">
        <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
        <button onClick={submitComment}>Submit comment</button>
        <button onClick={fetchComments}>Load comments</button>
      </div>
      <hr />
      {comments.map((comment: any) => {
        return (
          <div key={comment.id} className="flex gap-3  mt-5 layout">
            <p className="text-base font-semibold">
              {comment.id}. {comment.text}
            </p>
            <button className="text-red-500 font-bold" onClick={() => deleteComment(comment.id)}>
              delete
            </button>
          </div>
        );
      })}
    </>
  );
}
