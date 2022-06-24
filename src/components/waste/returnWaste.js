import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Dialog, DialogTitle } from '@mui/material';
import { useState, useEffect } from 'react';
import initializeForm from './update-waste';
import returnWasteHandler from './wastes';

export default function UpdateWaste(props) {
  const [dateReturned, setDateReturned] = useState('');

  useEffect(() => {
    initializeForm();
  }, []);

  const dateStayChangeHandler = (event) => {
    setDateReturned(event.target.value);
  };
  return (
    <Grid item xs={12}>
      <TextField
        fullWidth
        label="Date Returned"
        onChange={dateStayChangeHandler}
        value={dateReturned}
      />
      <Dialog>
        <Box>
          <Button
            fullWidth
            sx={{ mt: 3, mb: 2 }}
            type="submit"
            onClick={returnWasteHandler}
            variant="contained"
          >
            {' '}
            Return Waste
          </Button>
        </Box>
      </Dialog>
    </Grid>
  );
}
