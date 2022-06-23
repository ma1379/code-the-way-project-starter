import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
/*   import AddStudent from './student-forms/add-student';
import StudentsList from './students-list';;
import UpdateStudent from './student-forms/update-student'; 
import { getWasteList, addWaste, updateWaste } from '../../services/services';   */

export default function Wastes() {
    const [name, setName] = useState('');
    const [owner, setOwner] = useState('');
    const [price, setPrice] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [dateAccepted, setDateAccepted] = useState('');
    const [dateReturned, setDateReturned] = useState('');

        /*  useEffect(() => {
        refreshWastes();
    }, []);     */  

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
        const newStudent = {
            name: enteredName,
            owner: enteredOwner,
            price: enteredPrice,
            city: enteredCity,
            state: enteredState,
            postalCode: enteredState,
            dateAccepted: enteredDateAccepted,
            dateReturned: enteredDateReturned
        };
    };
}