import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { userHandler } from '../../api';

function UserAvatar({ userId }) {
  const [initial, setInitial] = useState('');

  const init = async () => {
    const { data } = await userHandler.fetchById(userId);
    setInitial(data?.name[0]);
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
