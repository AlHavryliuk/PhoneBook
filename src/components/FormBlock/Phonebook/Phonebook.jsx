import { useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import { IMaskInput } from 'react-imask';
import css from './Phonebook.module.scss';

import { select } from 'store/selectors/selectors';
import { addContact } from 'store/contactsReducer/contactsOperations';

const Phonebook = () => {
  const contacts = useSelector(select.contacts);
  const dispatch = useDispatch();
  const inputTelRef = useRef(null);
  const inputNameRef = useRef(null);

  const handleSubmit = event => {
    event.preventDefault();
    const newContact = {
      name: inputNameRef.current.value,
      number: inputTelRef.current.value,
    };
    if (!numberValidation(newContact.number.length)) {
      Notify.failure('Enter full telephone number');
      return;
    }
    if (contacts.some(el => el.name === newContact.name.trim())) {
      Notify.failure('A contact with the same name already exists');
      return;
    }
    dispatch(addContact(newContact));
    Notify.success(`'${newContact.name}' added successfully`);
    resetState();
  };

  const resetState = () => {
    inputTelRef.current.value = '';
    inputNameRef.current.value = '';
  };

  const numberValidation = length => length > 11;

  return (
    <form className={css.phonebookForm} onSubmit={handleSubmit}>
      <label htmlFor="formName">Name:</label>
      <input
        type="text"
        name="name"
        id="formName"
        ref={inputNameRef}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        placeholder="Enter name..."
        required
      />
      <label htmlFor="formTel">Number:</label>
      <IMaskInput
        name="number"
        // mask={`+38 (000) 00-000-00`}
        mask={`000-000-0000`}
        radix="."
        unmask={true}
        inputRef={inputTelRef}
        placeholder="Enter number..."
      />
      <button>Add</button>
    </form>
  );
};

export default Phonebook;
