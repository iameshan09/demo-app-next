import { pathToRegexp } from 'path-to-regexp';
import { PATH_DEFAULT, PATH_POSTS } from '../constants/paths';

const isProtectedRoute = (pathname) => {
  const paths = [
    PATH_DEFAULT, PATH_POSTS,
  ];

  return paths.some((p) => {
    const regExp = pathToRegexp(p);
    return regExp.test(pathname);
  });
};

export {
  isProtectedRoute,
};
