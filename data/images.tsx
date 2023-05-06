import { ImageSourcePropType } from "react-native";

const images: Photo[] = [
    {
        image: require("../assets/images/one.png"),
        date: "2022-08-03",
        hour: "12:00",
        note: "Lorem ipsum dolor sit amet",
        isFavorite: true,
    },
    {
        image: require("../assets/images/two.png"),
        date: "2022-08-03",
        hour: "12:00",
        note: null,
        isFavorite: false,
    },
    {
        image: require("../assets/images/three.png"),
        date: "2022-08-04",
        hour: "12:00",
        note: "Lorem ipsum dolor sit amet",
        isFavorite: false,
    },
    {
        image: require("../assets/images/four.png"),
        date: "2022-08-03",
        hour: "12:00",
        note: "Lorem ipsum dolor sit amet",
        isFavorite: false,
    },
    {
        image: require("../assets/images/five.png"),
        date: "2022-08-03",
        hour: "12:00",
        note: "Lorem ipsum dolor sit amet",
        isFavorite: false,
    },
    {
        image: require("../assets/images/six.png"),
        date: "2022-08-03",
        hour: "12:00",
        note: "Lorem ipsum dolor sit amet",
        isFavorite: false,
    },
    {
        image: require("../assets/images/seven.png"),
        date: "2022-08-03",
        hour: "12:00",
        note: "Lorem ipsum dolor sit amet",
        isFavorite: false,
    },
    {
        image: require("../assets/images/eight.png"),
        date: "2022-08-03",
        hour: "12:00",
        note: "Lorem ipsum dolor sit amet",
        isFavorite: false,
    },
    {
        image: require("../assets/images/nine.png"),
        date: "2022-08-03",
        hour: "12:00",
        note: "Lorem ipsum dolor sit amet",
        isFavorite: false,
    },
    {
        image: require("../assets/images/ten.png"),
        date: "2022-08-03",
        hour: "12:00",
        note: "Lorem ipsum dolor sit amet",
        isFavorite: false,
    },
    {
        image: require("../assets/images/eleven.png"),
        date: "2022-08-03",
        hour: "12:00",
        note: "Lorem ipsum dolor sit amet",
        isFavorite: false,
    },
];

export type Photo = {
    image: ImageSourcePropType;
    date: string;
    hour: string;
    note: string;
    isFavorite: boolean;
};

const images2: Photo[] = [
    {
        image: require("../assets/images/one.png"),
        date: "2022-08-03",
        hour: "12:00",
        note: "Lorem ipsum dolor sit amet",
        isFavorite: true,
    },
    {
        image: require("../assets/images/two.png"),
        date: "2022-08-03",
        hour: "12:00",
        note: null,
        isFavorite: false,
    },
];

const imageMap: { [key: number]: Photo[] } = {
    0: images,
    1: images2,
};

export const loadImagesByKey = (key: number): Photo[] => {
    return imageMap[key] || [];
};

export const getCurrentImages = (): Photo[] => {
    return images;
};

export const addImage = (key: number, photo: Photo): void => {
    if (imageMap[key]) {
        imageMap[key].push(photo);
    } else {
        imageMap[key] = [photo];
    }
};

export const deleteImage = (key: number, idx: number): void => {
    const imagesForKey = imageMap[key];
    if (imagesForKey) {
        imagesForKey.splice(idx, 1);
    }
};

export const setFavorite = (key: number, idx: number, isFavorite: boolean): void => {
    const imagesForKey = imageMap[key];
    if (imagesForKey) {
        imagesForKey[idx].isFavorite = isFavorite;
    }
};

export const setNote = (key: number, idx: number, note: string): void => {
    const imagesForKey = imageMap[key];
    if (imagesForKey) {
        imagesForKey[idx].note = note;
    }
};