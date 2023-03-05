import Section from 'components/Custom/PhoneSection/PhoneSection';
import React from 'react';

import Filterblock from 'components/FormBlock/Filterblock/Filterblock';
import Phonebook from 'components/FormBlock/Phonebook/Phonebook';

const HomePage = () => {
  return (
    <>
      <Section title="PhoneBook">
        <Phonebook />
        <Filterblock title="Filter by Name" />
      </Section>
    </>
  );
};

export default HomePage;
