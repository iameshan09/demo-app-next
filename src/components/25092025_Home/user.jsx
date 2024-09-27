import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';

function UserAvatar({ userId }) {
  const [initial, setInitial] = useState('');

  const init = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`);
    const data = await res.json();

    if (Array.isArray(data) && data.length) {
      setInitial(data[0].name[0]);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
      {initial}
    </Avatar>
  );
}

export default UserAvatar;
