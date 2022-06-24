import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
 
export default function WasteList(props) {
     const { wastes, updateWasteHandler } = props;
   
     const updateWaste = (event) => {
       updateWasteHandler(event.target.value);
     };

     function dateReturnedCheckValid(waste){
        if (waste.dateReturned != null ) {
        return(
            <Typography component ="p">Date Returned: {waste.dateReturned.substring(0, 10)}</Typography>
        ); } {
        return (
           <Typography component = "p"> Date Returned: N/A</Typography>
        );}
     }

     
 
    return (
        <Box sx={{ mt: 4 }}>
            <Grid container spacing={2}>
                {wastes.map((waste) => (
                    <Grid item xs={12} key={waste.id}>
                        <Typography component="p">{waste.id}</Typography>
                        <Typography component="p">Name of Waste :  {waste.name} </Typography>
                        <Typography component="p">Owner - full name : {waste.owner}</Typography>
                        <Typography component="p">Price : {waste.price}</Typography>
                        <Typography component="p">City : {waste.city}</Typography>
                        <Typography component="p">State : {waste.state}</Typography>
                        <Typography component="p">Postal Code :  {waste.postalCode.substring(0, 5)}</Typography>
                        <Typography component="p"> Date Accepted : {waste.dateAccepted.substring(0, 10)}</Typography>
                        {dateReturnedCheckValid(waste)}   
                        <Button value={waste.id} >
                        Return
                        </Button> 
                        <Button value={waste.id} onClick={updateWaste}>
                            Edit / Update
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
 
WasteList.propTypes = {
    wastes: PropTypes.array,
    updateWasteHandler: PropTypes.func,
};

WasteList.defaultProps = {
    wastes: [],
    updateWasteHandler: () => {},
};
 
