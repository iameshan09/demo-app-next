import React from 'react';
import Header from './Header';
import ProgressDialog from '../ProgressDialog';

function CustomLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <ProgressDialog />
    </>
  );
}

export default CustomLayout;
