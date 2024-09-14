import { readContacts } from '../../src/utils/readContacts.js';
import { writeContacts } from '../../src/utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log('No contacts to remove');
      return;
    }
    const updatedContacts = contacts.slice(0, contacts.length - 1);
    await writeContacts(updatedContacts);
    console.log('Last contact successfully removed');
  } catch (error) {
    console.log('Error removing last contact:', error);
    throw new Error('Failed to remove last contact');
  }
};

removeLastContact();
