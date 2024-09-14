import { readContacts } from '../../src/utils/readContacts.js';
import { writeContacts } from '../../src/utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const contacts = await readContacts();
    const updatedContacts = contacts.slice(0, 0);
    await writeContacts(updatedContacts);
    console.log('All contacts successfully removed');
  } catch (error) {
    console.log('Error removing contacts:', error);
    throw new Error('Failed to remove contacts');
  }
};

removeAllContacts();
