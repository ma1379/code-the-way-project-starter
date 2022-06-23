import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
 
export default function WasteList(props) {
     const { wastes, archiveWasteHandler, updateWasteHandler } = props;
   
     const archiveWaste = (event) => {
       archiveWasteHandler(event.target.value);
     };
   
     const updateWaste = (event) => {
       updateWasteHandler(event.target.value);
     };
 
    return (
        <Box sx={{ mt: 4 }}>
            <Grid container spacing={2}>
                {wastes.map((waste) => (
                    <Grid item xs={12} key={waste.id}>
                        <Typography component="p">{waste.id}</Typography>
                        <Typography component="p">Name of Waste :  {waste.name} </Typography>
                        <Typography component="p">Owner - full name : {waste.owner}</Typography>
                        <Typography component="p">Price : {waste.price.parseInt()}</Typography>
                        <Typography component="p">City : {waste.city}</Typography>
                        <Typography component="p">State : {waste.state}</Typography>
                        <Typography component="p">Postal Code :  {waste.postalCode.substring(0, 5)}</Typography>
                        <Typography component="p"> Date Accepted : {waste.dateAccepted.substring(0, 10)}
                        </Typography>
                        <Typography component="p"> Date Returned - if applicable : {waste.dateReturned.substring(0, 10)}
                        </Typography>
                        <Button value={waste.id} onClick={archiveWaste}>
                            Delete
                        </Button>
                        <Button value={waste.id} onClick={updateWaste}>
                            Update
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
 
WasteList.propTypes = {
    wastes: PropTypes.array.isRequired,
    archiveWasteHandler: PropTypes.func.isRequired,
    updateWasteHandler: PropTypes.func.isRequired,
};
