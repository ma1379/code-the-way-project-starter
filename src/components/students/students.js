import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import AddStudent from './student-forms/add-student';
import StudentsList from './students-list';
import { getStudents, addStudent } from '../../services/services';

export default function Students() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [cellPhone, setCellPhone] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [students, setStudents] = useState([]);
  const [activeStudents, setActiveStudents] = useState([]);

  useEffect(() => {
    refreshStudents();
  }, []);

  const refreshStudents = async () => {
    // const studentsList = [
    //   {
    //     id: 1,
    //     StudentFirstName: 'firstName1',
    //     StudentLastName: 'lastName1',
    //     StudentDateOfBirth: 'birthDate1',
    //     StudentCellPhone: 'phone1',
    //     StudentEmail: 'email1',
    //     Active: true,
    //   },
    //   {
    //     id: 2,
    //     StudentFirstName: 'firstName2',
    //     StudentLastName: 'lastName2',
    //     StudentDateOfBirth: 'birthDate2',
    //     StudentCellPhone: 'phone2',
    //     StudentEmail: 'email2',
    //     Active: true,
    //   },
    // ];
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

  return (
    <Container maxWidth="sm">
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
        <StudentsList students={activeStudents} />
      </Box>
    </Container>
  );
}
