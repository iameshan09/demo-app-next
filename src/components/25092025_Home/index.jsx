'use client';

import {
  ExpandMore, Favorite, MoreVert, Share,
} from '@mui/icons-material';
import {
  Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton,
  Stack,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import UserAvatar from './user';
import Comments from './comment';
import PostImage from './post-image';

function Home() {
  const [posts, setPosts] = useState([]);
  const [fltPosts, setFltPosts] = useState([]);
  const [expanded, setExpanded] = useState('');

  const init = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    init();
  }, []);

  const filterPosts = () => {
    const result = [];
    const usedIndices = new Set();

    while (result.length < 10 && result.length < posts.length) {
      const randomIndex = Math.floor(Math.random() * posts.length);

      if (!usedIndices.has(randomIndex)) {
        result.push(posts[randomIndex]);
        usedIndices.add(randomIndex);
      }
    }

    setFltPosts(result);
  };

  useEffect(() => {
    filterPosts();
  }, [posts]);

  const _handelExpand = (id) => {
    if (expanded === id) {
      setExpanded('');
    } else {
      setExpanded(id);
    }
  };

  return (
    <Stack alignItems="center">
      {
        fltPosts.map((e) => (
          <Card key={e?.id} sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={(
                <UserAvatar userId={e?.userId} />
            )}
              action={(
                <IconButton aria-label="settings">
                  <MoreVert />
                </IconButton>
            )}
              title={e?.title}
              subheader="September 14, 2016"
            />
            <PostImage id={e?.id} />
            <CardContent>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {e?.body}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Favorite />
              </IconButton>
              <IconButton aria-label="share">
                <Share />
              </IconButton>
              <ExpandMore
                expand={expanded === e?.id}
                onClick={() => _handelExpand(e?.id)}
                aria-expanded={expanded === e?.id}
                aria-label="show more"
              >
                <ExpandMore />
              </ExpandMore>
            </CardActions>
            <Collapse
              in={expanded === e?.id}
              timeout="auto"
              unmountOnExit
            >
              <CardContent>
                <Comments postId={e?.id} />
              </CardContent>
            </Collapse>
          </Card>
        ))
      }
    </Stack>
  );
}

export default Home;
