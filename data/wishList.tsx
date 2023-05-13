const WishList: WishList[] = [];

export type WishList = {
    city: string;
    lat: number;
    lon: number;
};

export const loadInitialWishList = (): void => {
    WishList.length = 0;
    WishList.push({
        city: "Stockholm, Sweden 🇸🇪",
        lat: 59.3293,
        lon: 18.0686,
    });
    WishList.push({
        city: "Prague, Czech Republic 🇨🇿",
        lat: 50.0755,
        lon: 14.4378,
    });
};

export const getCurrentWishList = (): WishList[] => {
    return WishList;
};

export const addCity = (city: WishList): void => {
    WishList.push(city);
};

export const deleteCity = (idx: number): void => {
    WishList.splice(idx, 1);
};
