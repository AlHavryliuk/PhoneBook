import { createSelector } from 'reselect';

const select = {
  contacts: state => state.contacts.items,
  isLoading: state => state.contacts.isLoading,
  error: state => state.contacts.error,
  filter: state => state.filter.filter,
  changeModeIsActive: state => state.contacts.changeMode.isActive,
  changeModeId: state => state.contacts.changeMode.id,
  changeMode: state => state.contacts.changeMode,
  token: state => state.auth.token,
  authComlete: state => state.auth.authComlete,
  userName: state => state.auth.userName,
  userEmail: state => state.auth.userEmail,
};

const reselect = {
  contactsByFilter: createSelector(
    [select.contacts, select.filter, select.changeModeIsActive], // Arguments
    (contacts, filter) => {
      
      if (filter !== '') {
        return contacts.filter(
          contact => contact.name.toLowerCase().trim().includes(filter) // Return filter array
        );
      }
      return contacts; // Return defaul array
    }
  ),

  // Check authentication completed

  authenticationComplete: createSelector(
    [select.token, select.authComlete],
    (token, authComlete) => {
      if (token === null) {
        return authComlete === false;
      }
      return (authComlete = true);
    }
  ),
};

export { select, reselect };
