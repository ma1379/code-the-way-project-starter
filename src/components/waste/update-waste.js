import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle } from '@mui/material';
import { useState, useEffect } from 'react';

export default function UpdateWaste(props) {
  const { waste, onSubmit, handleClose } = props;
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [price, setPrice] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [dateAccepted, setDateAccepted] = useState('');
  const [dateReturned, setDateReturned] = useState('');

  useEffect(() => {
    initializeForm();
  }, []);

  const initializeForm = () => {
    if (waste.wasteName != null) {
      setName(waste.wasteName);
    }
    if (waste.wasteOwner != null) {
      setOwner(waste.wasteOwner);
    }
    if (waste.wastePrice != null) {
      setPrice(waste.wastePrice);
    }
    if (waste.wasteCity != null) {
      setCity(waste.wasteCity);
    }
    if (waste.wasteState != null) {
      setState(waste.wasteState);
    }
    if (waste.wastePostalCode != null) {
      setPostalCode(waste.wastePostalCode);
    }
    if (waste.wasteDateAccepted != null) {
      const dateAcc = waste.wasteDateAccepted.substring(0, 10);
      setDateAccepted(dateAcc);
    }
    if (waste.wasteDateReturned != null) {
      const dateRet = waste.wasteDateReturned.substring(0, 10);
      setDateReturned(dateRet);
    }
  };
}
