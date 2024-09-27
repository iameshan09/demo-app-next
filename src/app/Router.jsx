'use client';

import React from 'react';
import PropTypes from 'prop-types';
import { usePathname } from 'next/navigation';
import Toast from '../components/Toast';
import { isProtectedRoute } from '../utils/routes.utils';
import ProtectedRoutes from '../routes/ProtectedRoutes';
import ProgressDialog from '../components/ProgressDialog';

function Router({ children }) {
  const pathname = usePathname();

  return (
    <>
      {(() => {
        switch (true) {
          case isProtectedRoute(pathname):
            return (
              <ProtectedRoutes>
                {children}
              </ProtectedRoutes>
            );
          default:
            return children;
        }
      })()}
      <Toast />
      <ProgressDialog />
    </>
  );
}

Router.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Router;
