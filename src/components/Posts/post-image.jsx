import { CardMedia } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { photoHandler } from '../../api';

function PostImage({ id }) {
  const [image, setImage] = useState(null);

  const init = async () => {
    try {
      const { data } = await photoHandler.fetchById(id);
      setImage(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <CardMedia
      component="img"
      height="194"
      image={image?.url || 'https://res.cloudinary.com/denec4g4s/image/upload/v1727376851/ebeyonds/Image_not_available-removebg-preview_kzqz9b.jpg'}
      alt="Paella dish"
    />
  );
}

export default PostImage;
