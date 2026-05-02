import React from 'react';
import { Card, CardContent, Typography, Stack, Box } from '@mui/material';

const DashboardCard = ({
  title,
  subtitle,
  children,
  action,
  footer,
  cardheading,
  headtitle,
  headsubtitle,
  middlecontent,
}) => {

  return (
    <Card
      sx={{
        p: 0,
        elevation: 0,
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.5) 100%)',
        border: '1px solid rgba(148, 163, 184, 0.2)',
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 1px rgba(96, 165, 250, 0.2) inset',
        transition: 'all 0.3s ease',
        '&:hover': {
          border: '1px solid rgba(96, 165, 250, 0.3)',
          boxShadow: '0 15px 40px rgba(96, 165, 250, 0.1), 0 0 1px rgba(96, 165, 250, 0.3) inset',
        },
      }}
      elevation={0}
    >
      {cardheading ? (
        <CardContent sx={{ position: 'relative', overflow: 'hidden' }}>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: -50,
              width: 200,
              height: 200,
              background: 'radial-gradient(circle, rgba(96, 165, 250, 0.1) 0%, transparent 70%)',
              borderRadius: '50%',
            }}
          />
          <Typography
            variant="h5"
            sx={{
              background: 'linear-gradient(135deg, #60A5FA 0%, #34D399 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 700,
            }}
          >
            {headtitle}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {headsubtitle}
          </Typography>
        </CardContent>
      ) : (
        <CardContent sx={{ p: { xs: 2.5, sm: 3 }, position: 'relative' }}>
          {title ? (
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              alignItems={'center'}
              mb={3}
            >
              <Box>
                {title ? (
                  <Typography
                    variant="h5"
                    sx={{
                      background: 'linear-gradient(135deg, #60A5FA 0%, #34D399 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontWeight: 700,
                    }}
                  >
                    {title}
                  </Typography>
                ) : (
                  ''
                )}

                {subtitle ? (
                  <Typography variant="subtitle2" color="textSecondary" sx={{ mt: 0.5 }}>
                    {subtitle}
                  </Typography>
                ) : (
                  ''
                )}
              </Box>
              {action}
            </Stack>
          ) : null}

          {children}
        </CardContent>
      )}

      {middlecontent}
      {footer}
    </Card>
  );
};

export default DashboardCard;
