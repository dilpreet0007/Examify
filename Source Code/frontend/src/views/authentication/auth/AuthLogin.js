import React from 'react';
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
} from '@mui/material';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';

const AuthLogin = ({ formik, title, subtitle, subtext }) => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;
  return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h2" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}

      <Stack spacing={3} sx={{ mt: 3 }}>
        <Box>
          <Typography
            variant="subtitle2"
            fontWeight={600}
            component="label"
            htmlFor="username"
            mb="8px"
            display="block"
            sx={{
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              fontSize: '0.8rem',
              color: 'textSecondary',
            }}
          >
            Email Address
          </Typography>
          <CustomTextField
            id="username"
            name="email"
            variant="outlined"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && errors.email ? true : false}
            helperText={touched.email && errors.email ? errors.email : null}
            required
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: '#60A5FA',
                },
              },
            }}
          />
        </Box>
        <Box>
          <Typography
            variant="subtitle2"
            fontWeight={600}
            component="label"
            htmlFor="password"
            mb="8px"
            display="block"
            sx={{
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              fontSize: '0.8rem',
              color: 'textSecondary',
            }}
          >
            Password
          </Typography>
          <CustomTextField
            id="password"
            name="password"
            type="password"
            variant="outlined"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && errors.password ? true : false}
            helperText={touched.password && errors.password ? errors.password : null}
            required
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: '#60A5FA',
                },
              },
            }}
          />
        </Box>
        <Stack justifyContent="space-between" direction="row" alignItems="center">
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label={
                <Typography variant="body2" sx={{ ml: 0.5 }}>
                  Remember this device
                </Typography>
              }
            />
          </FormGroup>
          <Typography
            fontWeight="500"
            sx={{
              textDecoration: 'none',
              background: 'linear-gradient(135deg, #60A5FA 0%, #34D399 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                filter: 'brightness(1.1)',
              },
              fontSize: '0.9rem',
            }}
          >
            Forgot Password?
          </Typography>
        </Stack>
      </Stack>
      <Box sx={{ mt: 4 }}>
        <Button
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          type="submit"
          onClick={handleSubmit}
          sx={{
            background: 'linear-gradient(135deg, #60A5FA 0%, #34D399 100%)',
            color: '#0B1220',
            fontWeight: 700,
            fontSize: '1rem',
            py: 1.5,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            transition: 'all 0.3s ease',
            '&:hover': {
              filter: 'brightness(1.1)',
              transform: 'translateY(-2px)',
              boxShadow: '0 10px 30px rgba(96, 165, 250, 0.3)',
            },
            '&:active': {
              transform: 'translateY(0)',
            },
          }}
        >
          Sign In
        </Button>
      </Box>
      {subtitle}
    </>
  );
};

export default AuthLogin;
