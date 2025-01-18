export default function getCoordinates() {
  return new Promise((resolve) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (!JSON.parse(localStorage.getItem("city-country"))) {
            const { longitude, latitude } = position.coords;
            localStorage.setItem(
              "city-country",
              JSON.stringify([{ lat: latitude, long: longitude }]),
            );
            resolve({ longitude, latitude });
          } else if (
            JSON.parse(localStorage.getItem("city-country")).length > 0
          ) {
            resolve({
              longitude: JSON.parse(localStorage.getItem("city-country"))[0]
                .long,
              latitude: JSON.parse(localStorage.getItem("city-country"))[0].lat,
            });
          }
        },
        (err) => {
          console.error(err);
        },
      );
    }
  });
}
