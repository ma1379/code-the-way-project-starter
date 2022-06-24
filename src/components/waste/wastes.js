import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';

/*  import AddStudent from './student-forms/add-student';
import StudentsList from './students-list';;
import UpdateStudent from './student-forms/update-student';  */

import AddWaste from './add-waste';
import WastesList from './waste-list';
import UpdateWaste from './update-waste';
import { getWasteList, addWaste, updateWaste } from '../../services/services';

export default function Wastes() {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [price, setPrice] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [dateAccepted, setDateAccepted] = useState('');
  const [dateReturned, setDateReturned] = useState('');
  const [wastes, setWastes] = useState([]);
  const [updateWasteModal, setUpdateWasteModal] = useState(false);
  const [wasteToUpdate, setWasteToUpdate] = useState('');

  useEffect(() => {
    refreshWastes();
  }, []);

  const refreshWastes = async () => {
    const response = await getWasteList();
    setWastes(response);
  };

  const onAddWasteFormSubmit = async (
    enteredName,
    enteredOwner,
    enteredPrice,
    enteredCity,
    enteredState,
    enteredPostalCode,
    enteredDateAccepted,
    enteredDateReturned
  ) => {
    const newWaste = {
      name: enteredName,
      owner: enteredOwner,
      price: enteredPrice,
      city: enteredCity,
      state: enteredState,
      postalCode: enteredState,
      dateAccepted: enteredDateAccepted,
      dateReturned: enteredDateReturned,
    };

    await addWaste(newWaste);
    refreshWastes('');
    setName('');
    setOwner('');
    setPrice('');
    setCity('');
    setState('');
    setPostalCode('');
    setDateAccepted('');
    setDateReturned('');
  };

  const updateModalChange = (wasteId) => {
    if (updateWasteModal === true) {
      setUpdateWasteModal(false);
    } else {
      const wasteIndex = wastes.findIndex((waste) => waste.id === wasteId);
      setWasteToUpdate(wastes[wasteIndex]);
      setUpdateWasteModal(true);
    }
  };

  const updateWasteHandler = async (
    newName,
    newOwner,
    newPrice,
    newCity,
    newState,
    newPostalCode,
    newDateAccepted,
    newDateReturned
  ) => {
    const returnWasteHandler = async () => {
      const updatedWastes = {
        name: newName,
        owner: newOwner,
        price: newPrice,
        city: newCity,
        state: newState,
        postalCode: newPostalCode,
        dateAccepted: newDateAccepted,
        dateReturned: newDateReturned,
      };

      await updateWaste(updateWaste);
      refreshWastes();
      updateModalChange();
    };

    return (
      <Container maxWidth="sm">
        {updateWasteModal && (
          <UpdateWaste
            waste={wasteToUpdate}
            onSubmit={updateWasteHandler}
            handleClose={updateModalChange}
          />
        )}
        {updateWasteModal && <returnWaste onSubmit={returnWasteHandler} />}

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Wastes
          </Typography>
          <AddWaste
            name={name}
            owner={owner}
            price={price}
            city={city}
            state={state}
            postalCode={postalCode}
            dateAccepted={dateAccepted}
            dateReturned={dateReturned}
            onNameChange={setName}
            onOwnerChange={setOwner}
            onPriceChange={setPrice}
            onCityChange={setCity}
            onStateChange={setState}
            onPostalCodeChange={setPostalCode}
            onDateAcceptedChange={setDateAccepted}
            onDateReturnedChange={setDateReturned}
            onSubmit={onAddWasteFormSubmit}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Waste
          students={activeStudents}
          archiveStudentHandler={archiveStudentHandler}
          updateStudentHandler={updateModalChange}
        />   */}
        </Box>
      </Container>
    );
  };
}
