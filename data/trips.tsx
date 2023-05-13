const Trips: Trips[] = [];

export type Trips = {
    city: string;
    date: string;
    budget: number;
    lat: number;
    lon: number;
};

export const loadInitialTrips = (): void => {
    Trips.length = 0;
    Trips.push({
        city: "Ibiza Island, Spain 🇪🇸",
        date: "August 8-13, 2022",
        budget: 4500,
        lat: 38.9067,
        lon: 1.4206,
    });
    Trips.push({
        city: "Sardinia, Italy 🇮🇹",
        date: "March 13, 2022",
        budget: 2000,
        lat: 40.1209,
        lon: 9.0129,
    });
    Trips.push({
        city: "Paris, France 🇫🇷",
        date: "January 8-13, 2022",
        budget: null,
        lat: 48.8566,
        lon: 2.3522,
    });
    Trips.push({
        city: "Kyiv, Ukraine 🇺🇦",
        date: "January 4-25, 2021",
        budget: 1000,
        lat: 50.4501,
        lon: 30.5234,
    });
};

export const getCurrentTrips = (): Trips[] => {
    return Trips;
};

export const addTrip = (trip: Trips): void => {
    Trips.push(trip);
};
