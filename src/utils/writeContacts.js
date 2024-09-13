import { PATH_DB } from '../constants/contacts.js';
import { writeFile } from 'fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(contacts, null, 2);
    await writeFile(PATH_DB, data, 'utf-8');
    console.log('Contacts saved');
  } catch (error) {
    console.log('Error writing contacts: ', error);
    throw new Error('Failed to write contacts');
  }
};
