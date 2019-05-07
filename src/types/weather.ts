export interface City {
  name: string;
  country: string;
}

export interface Weather {
  city: string;
  list: {
    day: string;
    time: string;
    temp: string;
    icon: string;
    dt: number;
  }[];
}

export interface WeatherPayload {
  cod: string;
  message: number;
  city: City;
  list: {
    dt: number;
    main: {
      temp: number;
    };
    weather: {
      main: string;
      description: string;
      icon: string;
    }[];
  }[];
}
