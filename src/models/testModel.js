export const getTestData = () => {
    // Contoh data, bisa diganti dengan query database
    return {
      message: "Data from the model",
    };
  };
  
  export const createTestData = (name) => {
    // Logika untuk menyimpan data (contoh tanpa database)
    return {
      message: `Data created for ${name}`,
    };
  };
  