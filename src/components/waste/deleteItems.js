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

export default function Students() {
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
    const response = await getStudents();
    setStudents(response);
    setActiveStudents(response.filter((student) => student.active === true));
  };

  const onAddStudentFormSubmit = async (
    enteredFirstName,
    enteredLastName,
    enteredBirthDate,
    enteredCellPhone,
    enteredEmailAddress
  ) => {
    const newStudent = {
      studentFirstName: enteredFirstName,
      studentLastName: enteredLastName,
      studentDateOfBirth: enteredBirthDate,
      studentCellPhone: enteredCellPhone,
      studentEmail: enteredEmailAddress,
      active: true,
    };

    await addStudent(newStudent);
    refreshStudents();
    setFirstName('');
    setLastName('');
    setBirthDate('');
    setCellPhone('');
    setEmailAddress('');
  };

  const archiveStudentHandler = async (studentId) => {
    const updatedStudent = {
      id: studentId,
      Active: false,
    };
    await updateStudent(updatedStudent);
    refreshStudents();
  };

  const updateModalChange = (studentId) => {
    if (updateStudentModal === true) {
      setUpdateStudentModal(false);
    } else {
      const studentIndex = students.findIndex(
        (student) => student.id === studentId
      );
      setStudentToUpdate(students[studentIndex]);
      setUpdateStudentModal(true);
    }
  };

  const updateStudentHandler = async (
    studentId,
    newFirstName,
    newLastName,
    newBirthDate,
    newCellPhone,
    newEmailAddress
  ) => {
    const updatedStudent = {
      id: studentId,
      studentFirstName: newFirstName,
      studentLastName: newLastName,
      studentDateOfBirth: newBirthDate,
      studentCellPhone: newCellPhone,
      studentEmail: newEmailAddress,
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
