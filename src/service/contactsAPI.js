import { $privateHost } from './hosts';

export const fetchContacts = async () => {
  try {
    const { data } = await $privateHost.get('/contacts');
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const deleteContact = async id => {
  try {
    const { data } = await $privateHost.delete(`/contacts/${id}`);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const postContact = async contact => {
  try {
    const { data } = await $privateHost.post('/contacts', contact);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const patchContact = async (id, contact) => {
  try {
    const { data } = await $privateHost.patch(`/contacts/${id}`, contact);
    return data;
  } catch (err) {
    console.error(err);
  }
};
