import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY,
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });

    return data;
  } catch (error) {
    console.log(error); 
  }
};

  
    export const getWeatherData = async (lat, lng) => {
      try {
        if (lat && lng) {
          const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${lng}&units=metric&APPID=REACT_APP_WEATHER_API_KEY=a50c6141033f2dbf096d481c2f10fc6`);
       
          return data;
        }
      } catch (error) {
        console.log(error);
      }
    };