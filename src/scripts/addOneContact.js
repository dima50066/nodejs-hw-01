import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    // Зчитуємо існуючі контакти
    let contacts = [];
    try {
      contacts = await readContacts();
    } catch (error) {
      console.log('Error reading contacts: ', error);
      throw new Error('Failed to read contacts');
    }

    // Генеруємо новий контакт
    const newContact = createFakeContact();

    // Додаємо новий контакт до масиву
    contacts.push(newContact);

    // Записуємо оновлений масив контактів у файл
    await writeContacts(contacts);

    console.log('One contact successfully added');
  } catch (error) {
    console.log('Error adding contact: ', error);
    throw new Error('Failed to add contact');
  }
};

// Викликаємо функцію для додавання одного контакту
addOneContact();
