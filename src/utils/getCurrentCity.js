import axios from "axios";
import getCoordinates from "./getCoordinates";

export default async function getCurrentCity() {
  if (!JSON.parse(localStorage.getItem("city-country"))) {
    getCoordinates();
  }

  try {
    const coordinates = JSON.parse(localStorage.getItem("city-country"))[0];

    console.log("coordinates", coordinates);

    if (!coordinates) return null;

    const response = await axios.get(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coordinates.lat}&lon=${coordinates.long}&zoom=18&addressdetails=1`,
    );

    const { city, country } = response.data.address;

    return { city, country };
  } catch (error) {
    console.error("Ошибка при получении города:", error);
    return "Не найдено( Дайте разрешение браузеру";
  }
}
