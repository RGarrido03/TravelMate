
const WishList: WishList[] = [];

export type WishList = {
    city: string,
};

export const loadInitialWishList= (): void => {
    WishList.length = 0;
    WishList.push({
        city: "Stockholm, Sweden 🇸🇪",
    });
    WishList.push({
        city: "Prague, Czech Republic 🇨🇿",
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



