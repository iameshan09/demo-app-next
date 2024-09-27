import { CardMedia } from '@mui/material';
import React, { useEffect, useState } from 'react';

function PostImage({ id }) {
  const [image, setImage] = useState(null);

  const init = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?id=${id}`);
    const data = await res.json();

    if (Array.isArray(data) && data.length) {
      setImage(data[0]);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <CardMedia
      component="img"
      height="194"
      image={image?.url || 'https://mui.com/static/images/cards/paella.jpg'}
      alt="Paella dish"
    />
  );
}

export default PostImage;
