import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Card, Stack, Typography } from '@mui/material';

import AuthLogin from './auth/AuthLogin';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import logoImage from 'src/assets/images/logos/examify-logo.png';

import { useLoginMutation } from '../../slices/usersApiSlice';

import { setCredentials } from '../../slices/authSlice';
import { toast } from 'react-toastify';
import Loader from './Loader';

const userValidationSchema = yup.object({
  email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(2, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});
const initialUserValues = {
  email: '',
  password: '',
};

const Login = () => {
  const formik = useFormik({
    initialValues: initialUserValues,
    validationSchema: userValidationSchema,
    onSubmit: (values, action) => {
      handleSubmit(values);
    },
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  const handleSubmit = async ({ email, password }) => {
    try {
      const res = await login({ email, password }).unwrap();

      dispatch(setCredentials({ ...res }));
      formik.resetForm();

      const redirectLocation = JSON.parse(localStorage.getItem('redirectLocation'));
      if (redirectLocation) {
        localStorage.removeItem('redirectLocation');
        navigate(redirectLocation.pathname);
      } else {
        navigate('/');
      }
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0B1220 0%, #1a2a4a 50%, #0f172a 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(96, 165, 250, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          top: '-50px',
          left: '-100px',
          animation: 'float 6s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(20px)' },
          },
        }}
      />

      <Card
        elevation={0}
        sx={{
          p: { xs: 3, sm: 4 },
          width: '100%',
          maxWidth: '450px',
          backdropFilter: 'blur(20px)',
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.5) 100%)',
          border: '1px solid rgba(148, 163, 184, 0.2)',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 1px rgba(96, 165, 250, 0.3) inset',
          borderRadius: '16px',
          position: 'relative',
          zIndex: 1,
          animation: 'slideUp 0.6s ease-out',
          '@keyframes slideUp': {
            from: { opacity: 0, transform: 'translateY(20px)' },
            to: { opacity: 1, transform: 'translateY(0)' },
          },
        }}
      >
        {/* Logo Section */}
        <Box display="flex" alignItems="center" justifyContent="center" sx={{ mb: 4 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Box component="img" src={logoImage} alt="Examify logo" sx={{ width: '260px', maxWidth: '100%' }} />
          </Box>
        </Box>

        <AuthLogin
          formik={formik}
          subtext={
            <Typography
              variant="subtitle1"
              textAlign="center"
              color="textSecondary"
              mb={2}
              sx={{ fontSize: '0.95rem', letterSpacing: '0.05em' }}
            >
              CONDUCT SECURE ONLINE EXAMS NOW
            </Typography>
          }
          subtitle={
            <Stack direction="row" spacing={1} justifyContent="center" mt={3} flexWrap="wrap">
              <Typography color="textSecondary" variant="body2" fontWeight="500">
                New to AI_Evalu8?
              </Typography>
              <Typography
                component={Link}
                to="/auth/register"
                fontWeight="600"
                sx={{
                  textDecoration: 'none',
                  background: 'linear-gradient(135deg, #60A5FA 0%, #34D399 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    filter: 'brightness(1.2)',
                  },
                }}
              >
                Create an account
              </Typography>
              {isLoading && <Loader />}
            </Stack>
          }
        />
      </Card>
    </Box>
  );
};

export default Login;
