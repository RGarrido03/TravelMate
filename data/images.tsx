import { ImageSourcePropType } from "react-native";

export type Photo = {
    image: ImageSourcePropType;
    date: string;
    hour: string;
    isFavorite: boolean;
};

const images: Photo[] = [
    {
        image: require("../assets/images/one.png"),
        date: "2022-08-03",
        hour: "12:00",
        isFavorite: true,
    },
    {
        image: require("../assets/images/two.png"),
        date: "2022-08-03",
        hour: "12:00",
        isFavorite: false,
    },
    {
        image: require("../assets/images/three.png"),
        date: "2022-08-04",
        hour: "12:00",
        isFavorite: false,
    },
    {
        image: require("../assets/images/four.png"),
        date: "2022-08-03",
        hour: "12:00",
        isFavorite: false,
    },
    {
        image: require("../assets/images/five.png"),
        date: "2022-08-03",
        hour: "12:00",
        isFavorite: false,
    },
    {
        image: require("../assets/images/six.png"),
        date: "2022-08-03",
        hour: "12:00",
        isFavorite: false,
    },
    {
        image: require("../assets/images/seven.png"),
        date: "2022-08-03",
        hour: "12:00",
        isFavorite: false,
    },
    {
        image: require("../assets/images/eight.png"),
        date: "2022-08-03",
        hour: "12:00",
        isFavorite: false,
    },
    {
        image: require("../assets/images/nine.png"),
        date: "2022-08-03",
        hour: "12:00",
        isFavorite: false,
    },
    {
        image: require("../assets/images/ten.png"),
        date: "2022-08-03",
        hour: "12:00",
        isFavorite: false,
    },
    {
        image: require("../assets/images/eleven.png"),
        date: "2022-08-03",
        hour: "12:00",
        isFavorite: false,
    },
];

const images2: Photo[] = [
    {
        image: require("../assets/images/one.png"),
        date: "2022-08-03",
        hour: "12:00",
        isFavorite: true,
    },
    {
        image: require("../assets/images/two.png"),
        date: "2022-08-03",
        hour: "12:00",
        isFavorite: false,
    },
];

const images3: Photo[] = [
    {
        image: require("../assets/images/one.png"),
        date: "2022-08-03",
        hour: "12:00",
        isFavorite: true,
    },
    {
        image: require("../assets/images/two.png"),
        date: "2022-08-03",
        hour: "12:00",
        isFavorite: false,
    },
    {
        image: require("../assets/images/eight.png"),
        date: "2022-08-03",
        hour: "12:00",
        isFavorite: false,
    },
    {
        image: require("../assets/images/nine.png"),
        date: "2022-08-03",
        hour: "12:00",
        isFavorite: false,
    },
    {
        image: require("../assets/images/ten.png"),
        date: "2022-08-03",
        hour: "12:00",
        isFavorite: false,
    },
    {
        image: require("../assets/images/eleven.png"),
        date: "2022-08-03",
        hour: "12:00",
        isFavorite: false,
    },
];

const images4: Photo[] = [
    {
        image: require("../assets/images/nine.png"),
        date: "2022-08-03",
        hour: "12:00",
        isFavorite: false,
    },
    {
        image: require("../assets/images/ten.png"),
        date: "2022-08-03",
        hour: "12:00",
        isFavorite: false,
    },
    {
        image: require("../assets/images/eleven.png"),
        date: "2022-08-03",
        hour: "12:00",
        isFavorite: false,
    },
];

const imageMap: { [key: number]: Photo[] } = {
    0: images,
    1: images2,
    2: images3,
    3: images4,
};

export const loadImagesByKey = (key: number): Photo[] => {
    return imageMap[key] || [];
};

export const addTripToPhotosMap = (): void => {
    imageMap[Object.keys(imageMap).length] = [];
};

export const addImage = (key: number, photo: Photo): void => {
    imageMap[key].push(photo);
};

export const deleteImage = (key: number, idx: number): void => {
    const imagesForKey: Photo[] = imageMap[key];
    if (imagesForKey) {
        imagesForKey.splice(idx, 1);
    }
};

export const setFavorite = (key: number, idx: number, isFavorite: boolean): void => {
    const imagesForKey: Photo[] = imageMap[key];
    if (imagesForKey) {
        imagesForKey[idx].isFavorite = isFavorite;
    }
};
