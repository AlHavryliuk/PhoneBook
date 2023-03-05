import Contact from 'components/Contacts/Contact/Contact';
import { useSelector } from 'react-redux';
import { reselect, select } from 'store/selectors/selectors';
import Loader from 'components/Loader/Loader';
import { ContactContainer, StyledContactList } from './ContactList.styled';
import ChangeContact from '../ChangeContact/ChangeContact';

const ContactList = () => {
  const contacts = useSelector(reselect.contactsByFilter);
  const changeModeIsActive = useSelector(select.changeModeIsActive);
  const isLoading = useSelector(select.isLoading);

  // Default loading contacts from mockAPI

  return (
    <ContactContainer>
      <h2>Contacts</h2>
      {contacts.length ? (
        <StyledContactList>
          {isLoading && <Loader />}
          {contacts.map((contact, index) => (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              phone={contact.number}
              index={++index}
            />
          ))}
        </StyledContactList>
      ) : (
        <h1>Sorry... No contacts found matching search criteria...</h1>
      )}
      {changeModeIsActive && <ChangeContact />}
    </ContactContainer>
  );
};

export default ContactList;
