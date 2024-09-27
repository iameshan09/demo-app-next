'use client';

import { Adb, Menu as MenuIcon } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { pages, settings } from '../../../constants/nav-links';
import RightMenu from './right-menu';

function Header() {
  // const [anchorElNav, setAnchorElNav] = useState(null);
  // const [anchorElUser, setAnchorElUser] = useState(null);

  // const handleOpenNavMenu = (e) => {
  //   setAnchorElNav(e.currentTarget);
  // };
  // const handleOpenUserMenu = (e) => {
  //   setAnchorElUser(e.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <AppBar position="sticky">
      <Box display="flex" alignItems="center" height={70} px={30}>
        <Box width={75}>
          <Box component="img" src="https://res.cloudinary.com/denec4g4s/image/upload/v1727366599/ebeyonds/logo_coloured_qud8tw.png" width="100%" />
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" width="100%" gap={30}>
          {pages.map((e) => (<Box color="white"><Button href={e.path} color="inherit" size="large">{e.label}</Button></Box>))}
        </Box>
        <RightMenu />
      </Box>
    </AppBar>
  );
}

export default Header;
