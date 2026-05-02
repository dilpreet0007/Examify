import React from 'react';
import { Grid, Box, Typography, Skeleton, Stack } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import BlankCard from '../../../components/shared/BlankCard';
import ExamCard from './ExamCard';
import { useGetExamsQuery } from 'src/slices/examApiSlice';

const Exams = () => {
  // Fetch exam data from the backend using useGetExamsQuery
  const { data: userExams, isLoading, isError } = useGetExamsQuery();

  if (isLoading) {
    return (
      <PageContainer title="Exams" description="List of exams">
        <Grid container spacing={3}>
          {[...Array(6)].map((_, i) => (
            <Grid item sm={6} md={4} lg={3} key={i}>
              <BlankCard>
                <Box sx={{ p: 2 }}>
                  <Skeleton variant="rectangular" height={180} sx={{ borderRadius: 2, mb: 2 }} />
                  <Skeleton variant="text" height={32} sx={{ mb: 1 }} />
                  <Skeleton variant="text" width="60%" sx={{ mb: 2 }} />
                  <Stack spacing={1}>
                    <Skeleton variant="text" width="80%" />
                    <Skeleton variant="text" width="70%" />
                  </Stack>
                </Box>
              </BlankCard>
            </Grid>
          ))}
        </Grid>
      </PageContainer>
    );
  }

  if (isError) {
    return (
      <PageContainer title="Exams" description="List of exams">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '400px',
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(251, 113, 133, 0.1) 0%, transparent 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid rgba(251, 113, 133, 0.3)',
            }}
          >
            <Typography sx={{ fontSize: '2rem' }}>⚠️</Typography>
          </Box>
          <Typography variant="h6" sx={{ textAlign: 'center', color: 'error.main' }}>
            Error fetching exams
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ textAlign: 'center' }}>
            Please try refreshing the page
          </Typography>
        </Box>
      </PageContainer>
    );
  }

  if (!userExams || userExams.length === 0) {
    return (
      <PageContainer title="Exams" description="List of exams">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '400px',
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(148, 163, 184, 0.1) 0%, transparent 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid rgba(148, 163, 184, 0.3)',
            }}
          >
            <Typography sx={{ fontSize: '2rem' }}>📚</Typography>
          </Box>
          <Typography variant="h6" sx={{ textAlign: 'center' }}>
            No exams available
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ textAlign: 'center' }}>
            Check back later for new exams
          </Typography>
        </Box>
      </PageContainer>
    );
  }

  return (
    <PageContainer title="Exams" description="List of exams">
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            background: 'linear-gradient(135deg, #60A5FA 0%, #34D399 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            mb: 1,
          }}
        >
          Available Exams
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {userExams.length} exam{userExams.length !== 1 ? 's' : ''} ready to take
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {userExams.map((exam) => (
          <Grid item sm={6} md={4} lg={3} key={exam._id}>
            <BlankCard>
              <ExamCard exam={exam} />
            </BlankCard>
          </Grid>
        ))}
      </Grid>
    </PageContainer>
  );
};

export default Exams;
