import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import AddStudent from './student-forms/add-waste';
import StudentsList from './waste-list';
import UpdateStudent from './student-forms/update-waste';
import {
  getWaste,
  addWaste,
  updateWaste,
} from '../../services/services';

export default function Waste() {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [price, setPrice] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');

  useEffect(() => {
    refreshStudents();
  }, []);

  const refreshStudents = async () => {
    const response = await getWaste();
    setWaste(response);
    setActiveWaste(response.filter((student) => student.active === true));
  };

  const onAddStudentFormSubmit = async (
    enteredName,
    enteredOwner,
    enteredPrice,
    enteredCity,
    enteredState,
    enteredPostalCode
  ) => {
    const newWaste = {
      wasteName: enteredName,
      wasteOwner: enteredOwner,
      wastePrice: enteredPrice,
      wasteCity: enteredCity,
      wasteState: enteredState,
      wastePostalCode: enteredPostalCode,
      active: true,
    };

    await addWaste(newWaste);
    refreshWaste();
    setName('');
    setOwner('');
    setPrice('');
    setCity('');
    setState('');
    setPostalCode('');
  };

  const archiveWasteHandler = async (wasteId) => {
    const updatedWaste = {
      id: wasteId,
      Active: false,
    };
    await updateWaste(updatedWaste);
    refreshWaste();
  };

  const updateModalChange = (wasteId) => {
    if (updateWasteModal === true) {
      setUpdateStudentModal(false);
    } else {
      const wasteIndex = waste.findIndex(
        (waste) => waste.id === wasteId
      );
      setWasteToUpdate(waste[wasteIndex]);
      setUpdateWasteModal(true);
    }
  };

  const updateWasteHandler = async (
    wasteId,
    newName,
    newOwner,
    newPrice,
    newCity,
    newState,
    newPostalCode
  ) => {
    const updatedStudent = {
      id: wasteId,
      wasteName: newName,
      wasteLastName: newOwner,
      wasteBirth: newPrice,
      studentCellPhone: newCity,
      studentCellPhone: newState,
      studentCellPhone: newPostalCode,
      active: true,
    };
    await updateStudent(updatedStudent);
    refreshStudents();
    updateModalChange();
  };

  return (
    <Container maxWidth="sm">
      {updateStudentModal && (
        <UpdateStudent
          student={studentToUpdate}
          onSubmit={updateStudentHandler}
          handleClose={updateModalChange}
        />
      )}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Students
        </Typography>
        <AddStudent
          firstName={firstName}
          lastName={lastName}
          birthDate={birthDate}
          cellPhone={cellPhone}
          emailAddress={emailAddress}
          onFirstNameChange={setFirstName}
          onLastNameChange={setLastName}
          onBirthDateChange={setBirthDate}
          onCellPhoneChange={setCellPhone}
          onEmailAddressChange={setEmailAddress}
          onSubmit={onAddStudentFormSubmit}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <StudentsList
          students={activeStudents}
          archiveStudentHandler={archiveStudentHandler}
          updateStudentHandler={updateModalChange}
        />
      </Box>
    </Container>
  );
}
