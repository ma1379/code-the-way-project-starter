import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import AddStudent from './student-forms/add-student';
import StudentsList from './students-list';

export default function Students() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [cellPhone, setCellPhone] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [students, setStudents] = useState([]);

  useEffect(() => {
    refreshStudents();
  }, []);

  const refreshStudents = async () => {
    const studentsList = [
      {
        id: 1,
        StudentFirstName: 'firstName1',
        StudentLastName: 'lastName1',
        StudentDateOfBirth: 'birthDate1',
        StudentCellPhone: 'phone1',
        StudentEmail: 'email1',
        Active: true,
      },
      {
        id: 2,
        StudentFirstName: 'firstName2',
        StudentLastName: 'lastName2',
        StudentDateOfBirth: 'birthDate2',
        StudentCellPhone: 'phone2',
        StudentEmail: 'email2',
        Active: true,
      },
    ];
    setStudents(studentsList);
  };

  const onAddStudentFormSubmit = () => {
    // eslint-disable-next-line no-console
    console.log({ firstName, lastName, birthDate, cellPhone, emailAddress });
  };

  async function archiveStudentHandler() {
    // const updatedStudent = {
    //   id: studentId,
    //   Active: false
    // };
    // await updateStudent(updatedStudent);
    // refreshStudents();
  }

  function openUpdateModal() {
    // const studentIndex = studentsList.findIndex(student =>
    //   student.id === studentId
    // );
    // setStudentToUpdate(studentsList[studentIndex]);
    // setUpdateModal(true);
  }

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
        <StudentsList students={students} />
      </Box>
    </Container>
  );
}
