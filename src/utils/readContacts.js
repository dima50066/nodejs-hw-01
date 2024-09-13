import { readFile } from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const data = await readFile(PATH_DB, 'utf-8');

    // Перевіряємо, чи дані є
    if (!data.trim()) {
      return [];
    }

    // Перевіряємо і обробляємо JSON
    try {
      return JSON.parse(data);
    } catch (jsonError) {
      console.error('Error parsing JSON:', jsonError);
      throw new Error('Invalid JSON format in file');
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.warn(`File not found: ${PATH_DB}, returning an empty array.`);
      return [];
    }
    console.error('Error reading contacts:', error);
    throw new Error('Failed to read contacts');
  }
};
