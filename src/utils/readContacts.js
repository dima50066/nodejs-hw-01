import { readFile } from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    // Зчитуємо файл з вказаного шляху
    const data = await readFile(PATH_DB, 'utf-8');

    // Перевіряємо, чи файл не порожній
    if (!data) {
      return [];
    }

    // Парсимо JSON і повертаємо результат
    return JSON.parse(data);
  } catch (error) {
    // Якщо файл не знайдено, повертаємо порожній масив
    if (error.code === 'ENOENT') {
      console.warn(`File not found: ${PATH_DB}, returning an empty array.`);
      return [];
    }
    // Викидаємо помилку для інших типів проблем
    console.error('Error reading contacts:', error);
    throw new Error('Failed to read contacts');
  }
};
