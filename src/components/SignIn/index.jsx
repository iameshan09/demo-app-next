'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import {
  Box, Stack, TextField, Link, Button, Typography,
} from '@mui/material';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { validateSignIn } from '../../validations/user.validations';
import { startProgress, endProgress } from '../../redux/slices/progress.slice';
import PasswordField from '../PasswordField';

function SignIn() {
  const dispatch = useDispatch();
  // const searchParams = useSearchParams();
  // const defaultQueryString = searchParams.toString();
  // const newLoginQuery = defaultQueryString ? '&login=true' : 'login=true';
  // const queryString = defaultQueryString.concat(newLoginQuery);
  // const queryStringWithQuestionMark = '?'.concat(queryString);
  // const href = PATH_HOME.concat(queryStringWithQuestionMark);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: validateSignIn,
    onSubmit: async (values, { resetForm }) => {
      try {
        dispatch(startProgress());
        // const { data, headers } = await login(values);
        // const authToken = headers['x-authtoken'];
        // const user = JSON.stringify(data);
        // await signIn('credentials', {
        //   user,
        //   authToken,
        //   callbackUrl: href,
        // });
        // resetForm({ values: '' });
      } catch (err) {
        console.log(err);
      } finally {
        dispatch(endProgress());
      }
    },
  });

  const _handleEmailChange = (e) => {
    formik.setFieldError('email', '');
    formik.setFieldValue('email', e.target.value, false);
  };

  const _handlePasswordChange = (e) => {
    formik.setFieldError('password', '');
    formik.setFieldValue('password', e.target.value, false);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor="space"
      gap={30}
    >
      {/* <Box width={{ xs: 50, sm: 162 }}>
        <Logo width="100%" />
      </Box> */}
      <Stack
        component="form"
        width={{ sm: 530, xs: 275 }}
        height={453}
        justifyContent="center"
        bgcolor="white"
        px={{
          sm: 100,
          xs: 10,
        }}
        py={{
          sm: 50,
          xs: 20,
        }}
        gap={40}
        borderRadius={{
          xs: 0,
          md: 4,
        }}
        onSubmit={formik.handleSubmit}
        boxSizing="border-box"
      >
        <Box textAlign="center">
          <Typography fontWeight={500} fontSize="1.5em">
            Login
          </Typography>
        </Box>
        <Stack gap={30}>
          <TextField
            id="email"
            label="Email"
            size="small"
            value={formik.values.email}
            onChange={_handleEmailChange}
            error={!!formik.errors.email}
            helperText={formik.errors.email}
            fullWidth
          />
          <Stack gap={5} width="100%">
            <PasswordField
              id="password"
              label="Password"
              value={formik.values.password}
              error={!!formik.errors.password}
              helperText={formik.errors.password}
              onChange={_handlePasswordChange}
              fullWidth
            />
            <Stack width="100%" alignItems="end">
              <Link color="#03037F" fontSize="14px">
                Forgot password?
              </Link>
            </Stack>
          </Stack>
          <Button type="submit" variant="contained" color="primary">
            LOGIN
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default SignIn;
