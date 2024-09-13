import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  try {
    let contacts = [];

    try {
      contacts = await readContacts();
    } catch (error) {
      console.log('Error reading contacts: ', error);
      throw new Error('Failed to read contacts');
    }

    const newContacts = [];

    for (let i = 0; i < number; i += 1) {
      const newContact = createFakeContact();
      newContacts.push(newContact);
    }

    const updatedContacts = [...contacts, ...newContacts];

    await writeContacts(updatedContacts);
    console.log(`Generated ${number} contacts`);
  } catch (error) {
    console.log('Error generating contacts: ', error);
    throw new Error('Failed to generate contacts');
  }
};

generateContacts(5);
