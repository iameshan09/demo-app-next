import React, { useEffect, useState } from 'react';
import { commentHandler } from '../../api';

function Comments({ postId }) {
  const [comments, setComments] = useState([]);

  const init = async () => {
    const { data } = await commentHandler.fetchByPostId(postId);
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
