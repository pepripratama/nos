import { getTestData, createTestData } from '../models/testModel.js';

export const handleGetTest = () => {
  // Memanggil fungsi dari model
  const data = getTestData();
  return { success: true, data };
};

export const handlePostTest = (name) => {
  if (!name) {
    return { success: false, error: "Name is required" };
  }

  // Memanggil fungsi dari model untuk membuat data
  const data = createTestData(name);
  return { success: true, data };
};
