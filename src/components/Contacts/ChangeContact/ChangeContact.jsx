import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ChangePopup,
  ChangePopupBody,
  CustomChangeForm,
} from './ChangeContact.styled';
import { Notify } from 'notiflix';
import { IMaskInput } from 'react-imask';
import { select } from 'store/selectors/selectors';
import {
  editContact,
  getContacts,
} from 'store/contactsReducer/contactsOperations';
import { disactiveChangeMode } from 'store/contactsReducer/contactsSlice';

const ChangeContact = () => {
  const dispatch = useDispatch();
  const changeId = useSelector(select.changeModeId);
  const contacts = useSelector(select.contacts);
  const [changeContact, setChangeContact] = useState({
    name: null,
    number: null,
  });
  const inputTelRef = useRef(null);
  const inputNameRef = useRef(null);

  useEffect(() => {
    if (!changeId) return;
    const contact = contacts.filter(el => el.id === changeId);
    setChangeContact(contact[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    const newContact = {
      id: changeId,
      name: inputNameRef.current.value,
      number: inputTelRef.current.value,
    };
    if (!numberValidation(newContact.number.length)) {
      Notify.failure('Enter full telephone number');
      return;
    }
    if (!nameValidation(newContact)) {
      Notify.failure('A contact with the same name already exists');
      return;
    }
    dispatch(editContact(newContact))
      .unwrap()
      .then(() => dispatch(getContacts()));
    dispatch(disactiveChangeMode());

    Notify.success(`'${newContact.name}' edit successfully`);
  };

  const nameValidation = ({ id:userId, name:newName }) => {
    
   
    const filterArray = contacts.filter(contact => contact.name === newName);
    let coincidences = filterArray.length;
    if (coincidences === 0) return true;
    if (coincidences === 1) {
      return filterArray[0].id === userId ? true : false;
    }
    return false;
  };

  const numberValidation = length => length > 11;
  return (
    <ChangePopup>
      <ChangePopupBody>
        {changeContact.name && (
          <CustomChangeForm onSubmit={handleSubmit}>
            <label htmlFor="formName">Name:</label>
            <input
              type="text"
              name="name"
              id="formName"
              ref={inputNameRef}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="Enter name..."
              defaultValue={changeContact.name}
              required
            />
            <label htmlFor="formTel">Number:</label>
            <IMaskInput
              name="number"
              mask={`000-000-0000`}
              radix="."
              unmask={true}
              inputRef={inputTelRef}
              value={changeContact.number}
              placeholder="Enter number..."
            />
            <button>Edit</button>
          </CustomChangeForm>
        )}
      </ChangePopupBody>
    </ChangePopup>
  );
};

export default ChangeContact;
