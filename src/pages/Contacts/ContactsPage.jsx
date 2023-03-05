import ContactList from 'components/Contacts/ContactList/ContactList';
import Container from 'components/Custom/Container/Container';
import PhoneSection from 'components/Custom/PhoneSection/PhoneSection';
import Filterblock from 'components/FormBlock/Filterblock/Filterblock';
import Phonebook from 'components/FormBlock/Phonebook/Phonebook';

const ContactsPage = () => {
  return (
    <>
      <PhoneSection title="PhoneBook">
        <Phonebook />
        <Filterblock title="Filter by Name" />
      </PhoneSection>
      <Container title="Contacts">
        <ContactList />
      </Container>
    </>
  );
};

export default ContactsPage;
