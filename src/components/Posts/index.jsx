'use client';

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Box, Card, CardActions, CardContent, CardHeader, Collapse, IconButton, Typography,
} from '@mui/material';
import {
  ExpandMore, Favorite, MoreVert, Share,
} from '@mui/icons-material';
import { endProgress, startProgress } from '../../redux/slices/progress.slice';
import { postHandler } from '../../api';
import UserAvatar from './user';
import PostImage from './post-image';
import Comments from './comment';

function Posts() {
  const dispatch = useDispatch();
  const [rows, setRows] = useState([]);
  const [expanded, setExpanded] = useState('');

  const init = async () => {
    try {
      dispatch(startProgress());
      const { data } = await postHandler.fetchPosts();
      setRows(data);
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(endProgress());
    }
  };

  useEffect(() => {
    init();
  }, []);

  const _handelExpand = (id) => {
    if (expanded === id) {
      setExpanded('');
    } else {
      setExpanded(id);
    }
  };

  return (
    <Box>
      {
        rows.map((e) => (
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
    </Box>
  );
}

export default Posts;
