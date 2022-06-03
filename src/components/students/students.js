import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddStudent from './student-forms/add-student';
import StudentsList from './students-list';
import UpdateStudent from './student-forms/update-student';
import {
  getStudents,
  addStudent,
  updateStudent,
} from '../../services/services';
import ROUTES from '../../constants/routes';

export default function Students() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [cellPhone, setCellPhone] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [students, setStudents] = useState([]);
  const [activeStudents, setActiveStudents] = useState([]);
  const [updateStudentModal, setUpdateStudentModal] = useState(false);
  const [studentToUpdate, setStudentToUpdate] = useState('');

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

  const onUpdateStudent = (studentId) => {
    if (updateStudentModal == true) {
      setUpdateStudentModal(false);
    } else {
      const studentIndex = students.findIndex(
        (student) => student.id === studentId
      );
      setStudentToUpdate(students[studentIndex]);
      setUpdateStudentModal(true);
    }
  };

  const updateStudentHandler = async (studentId) => {};

  return (
    <Container maxWidth="sm">
      {updateStudentModal && (
        <UpdateStudent
          student={studentToUpdate}
          onSubmit={updateStudentHandler}
          handleClose={onUpdateStudent}
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
          updateStudentHandler={onUpdateStudent}
        />
      </Box>
    </Container>
  );
}
