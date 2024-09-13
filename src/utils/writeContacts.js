import { writeFile } from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    // Конвертуємо дані в формат JSON з відступами для читабельності
    const data = JSON.stringify(updatedContacts, null, 2);

    // Записуємо дані у файл
    await writeFile(PATH_DB, data, 'utf-8');

    console.log('Contacts successfully written to file.');
  } catch (error) {
    // Обробляємо помилки, що можуть виникнути під час запису
    console.error('Error writing contacts:', error);
    throw new Error('Failed to write contacts');
  }
};
