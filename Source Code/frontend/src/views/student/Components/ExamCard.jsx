import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, IconButton, Stack, Box, Chip, LinearProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '../../teacher/components/DeleteIcon';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Clock, BookOpen } from 'lucide-react';

const imgUrl =
  'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbXB1dGVyJTIwc2NpZW5jZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80';

export default function ExamCard({ exam }) {
  const { examName, duration, totalQuestions, examId } = exam;
  const { userInfo } = useSelector((state) => state.auth);
  const isTeacher = userInfo?.role === 'teacher';

  const navigate = useNavigate();
  const isExamActive = true;

  const handleCardClick = () => {
    if (isTeacher) {
      toast.error('You are a teacher, you cannot take this exam');
    }
    if (isExamActive && !isTeacher) {
      navigate(`/exam/${examId}`);
    }
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.5) 100%)',
        border: '1px solid rgba(148, 163, 184, 0.2)',
        borderRadius: '16px',
        overflow: 'hidden',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        cursor: isExamActive && !isTeacher ? 'pointer' : 'default',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.05) 0%, transparent 100%)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
        },
        '&:hover': {
          transform: isExamActive && !isTeacher ? 'translateY(-8px)' : 'none',
          boxShadow:
            isExamActive && !isTeacher
              ? '0 20px 40px rgba(96, 165, 250, 0.15), 0 0 1px rgba(96, 165, 250, 0.3) inset'
              : 'none',
          border: isExamActive && !isTeacher ? '1px solid rgba(96, 165, 250, 0.4)' : '1px solid rgba(148, 163, 184, 0.2)',
          '&::before': {
            opacity: 1,
          },
        },
      }}
    >
      <CardActionArea
        onClick={handleCardClick}
        disabled={isTeacher}
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
          }}
        >
          <CardMedia
            component="img"
            height="180"
            image={imgUrl}
            alt="Exam"
            sx={{
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(180deg, transparent 0%, rgba(11, 18, 32, 0.4) 100%)',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              display: 'flex',
              gap: 1,
            }}
          >
            <Chip
              label="Active"
              size="small"
              sx={{
                background: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)',
                color: '#0B1220',
                fontWeight: 600,
                fontSize: '0.75rem',
              }}
            />
          </Box>
        </Box>

        <CardContent
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            pb: 2,
          }}
        >
          <Stack direction="row" justifyContent="space-between" alignItems="flex-start" gap={1} mb={2}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(135deg, #60A5FA 0%, #34D399 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                mb: 0,
                flex: 1,
              }}
            >
              {examName}
            </Typography>
            {isTeacher && (
              <IconButton aria-label="delete" size="small" sx={{ ml: 1 }}>
                <DeleteIcon examId={examId} />
              </IconButton>
            )}
          </Stack>

          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ mb: 2, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}
          >
            Multiple Choice Questions
          </Typography>

          <Stack spacing={1.5} sx={{ flexGrow: 1 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <BookOpen size={16} style={{ opacity: 0.7 }} />
              <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
                <strong>{totalQuestions}</strong> Questions
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <Clock size={16} style={{ opacity: 0.7 }} />
              <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
                <strong>{duration}</strong> minutes
              </Typography>
            </Stack>
          </Stack>

          <LinearProgress
            variant="determinate"
            value={75}
            sx={{
              mt: 2,
              height: 4,
              borderRadius: 2,
              backgroundColor: 'rgba(148, 163, 184, 0.2)',
              '& .MuiLinearProgress-bar': {
                background: 'linear-gradient(90deg, #60A5FA 0%, #34D399 100%)',
              },
            }}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
