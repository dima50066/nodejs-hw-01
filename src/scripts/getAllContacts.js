import { readContacts } from '../../src/utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log(contacts);
    return contacts;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to read contacts');
  }
};

console.log(await getAllContacts());
