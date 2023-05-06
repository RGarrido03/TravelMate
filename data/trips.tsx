
const Trips: Trips[] = [];

export type Trips = {
    city: string,
    date: string,
    budget: number,
};

export const loadInitialTrips= (): void => {
    Trips.length = 0;
    Trips.push({
        city: "Ibiza Island, Spain 🇪🇸",
        date: "August 8-13, 2022",
        budget: 4500,
    });
    Trips.push({
        city: "Sardinia, Italy 🇮🇹",
        date: "March 13, 2022",
        budget: 2000,
    });
    Trips.push({
        city: "Paris, France 🇫🇷",
        date: "January 8-13, 2022",
        budget: null,
    });
    Trips.push({
        city: "kyiv, Ukraine 🇺🇦",
        date: "January 4-25, 2021",
        budget: 1000,
    });
};

export const getCurrentTrips = (): Trips[] => {
    return Trips;
};

export const addTrip = (trip: Trips): void => {
    Trips.push(trip);
};


