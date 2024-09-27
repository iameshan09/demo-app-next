import { Avatar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

function Comments({ postId }) {
  const [comments, setComments] = useState([]);

  const init = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    const data = await res.json();
    setComments(data);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <ul>
      {comments.map((e) => (
        <li key={e?.id} style={{ marginBottom: 2 }}>
          {e?.body}
        </li>
      ))}
    </ul>
  );
}

export default Comments;
