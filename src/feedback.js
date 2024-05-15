import fs from "fs/promises";
import path from "path";

const saveDataToFile = async (data) => {
  // Путь к JSON-файлу внутри проекта
  const filePath = path.resolve("/public/feedback.json");

  // Запись данных в файл
  try {
    await fs.writeFile(filePath, JSON.stringify(data));
    console.log("Data saved to file successfully.");
  } catch (error) {
    console.error("Error saving data to file:", error);
  }
};
