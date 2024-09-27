'use client';

import PropTypes from 'prop-types';
import { useSession } from 'next-auth/react';
import SignIn from '../components/SignIn';

function ProtectedRoutes({ children }) {
  const { data: session } = useSession();
  return session ? children : <SignIn />;
}

ProtectedRoutes.propTypes = {
  children: PropTypes.any.isRequired,
};

export default ProtectedRoutes;
