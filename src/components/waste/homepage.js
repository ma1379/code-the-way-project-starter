import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import ROUTES from '../../constants/routes';

export default function Homepage() {
  const navigate = useNavigate();

  const onRepositoryClick = () => {
    window.open(
      'https://github.com/joeyschroeder/code-the-way-project-starter'
    );
  };

  const onDemoSignUpFormClick = () => {
    navigate(ROUTES.SIGN_UP);
  };

  const onStudentListClick = () => {
    navigate(ROUTES.STUDENTS);
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          align="center"
          color="text.primary"
          component="h1"
          gutterBottom
          variant="h2"
          sx={{ mt: 5 }}
        >
          Welcome to the Waste Management Company ! 
        </Typography>
        <Typography
          align="center"
          color="text.secondary"
          paragraph
          variant="h5"
        >
          We are have two on-site locations in {' '}
          <Link
            color="primary"
            href="https://www.ci.brookfield.wi.us/"
            target="_blank"
          >
            Brookfield
          </Link>
          , and{' '}
          <Link
            color="primary"
            href="https://city.milwaukee.gov/home"
            target="_blank"
          >
            Milwaukee.
          </Link>
          . It&apos;s a great company and super legitimate too.
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button variant="contained" onClick={onDemoSignUpFormClick}>
            Demo Sign-Up Form
          </Button>

          <Button variant="outlined" onClick={onRepositoryClick}>
            Repository
          </Button>
          <Button variant="contained" onClick={onStudentListClick}>
            Waste List
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
