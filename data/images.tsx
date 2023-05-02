import { ImageSourcePropType } from "react-native";

const images: Photo[] = [];

export type Photo = {
    image: ImageSourcePropType;
    date: string;
    hour: string;
    note: string;
    isFavorite: boolean;
};

// Load images from the "assets/images" folder
export const loadInitialImages = (): void => {
    images.length = 0;
    images.push({
        image: require("../assets/images/one.png"),
        date: "2022-08-03",
        hour: "12:00",
        note: "Lorem ipsum dolor sit amet",
        isFavorite: true,
    });
    images.push({
        image: require("../assets/images/two.png"),
        date: "2022-08-03",
        hour: "12:00",
        note: null,
        isFavorite: false,
    });
    images.push({
        image: require("../assets/images/three.png"),
        date: "2022-08-04",
        hour: "12:00",
        note: "Lorem ipsum dolor sit amet",
        isFavorite: false,
    });
    images.push({
        image: require("../assets/images/four.png"),
        date: "2022-08-03",
        hour: "12:00",
        note: "Lorem ipsum dolor sit amet",
        isFavorite: false,
    });
    images.push({
        image: require("../assets/images/five.png"),
        date: "2022-08-03",
        hour: "12:00",
        note: "Lorem ipsum dolor sit amet",
        isFavorite: false,
    });
    images.push({
        image: require("../assets/images/six.png"),
        date: "2022-08-03",
        hour: "12:00",
        note: "Lorem ipsum dolor sit amet",
        isFavorite: false,
    });
    images.push({
        image: require("../assets/images/seven.png"),
        date: "2022-08-03",
        hour: "12:00",
        note: "Lorem ipsum dolor sit amet",
        isFavorite: false,
    });
    images.push({
        image: require("../assets/images/eight.png"),
        date: "2022-08-03",
        hour: "12:00",
        note: "Lorem ipsum dolor sit amet",
        isFavorite: false,
    });
    images.push({
        image: require("../assets/images/nine.png"),
        date: "2022-08-03",
        hour: "12:00",
        note: "Lorem ipsum dolor sit amet",
        isFavorite: false,
    });
    images.push({
        image: require("../assets/images/ten.png"),
        date: "2022-08-03",
        hour: "12:00",
        note: "Lorem ipsum dolor sit amet",
        isFavorite: false,
    });
    images.push({
        image: require("../assets/images/eleven.png"),
        date: "2022-08-03",
        hour: "12:00",
        note: "Lorem ipsum dolor sit amet",
        isFavorite: false,
    });
};

export const getCurrentImages = (): Photo[] => {
    return images;
};

export const addImage = (photo: Photo): void => {
    images.push(photo);
};

export const deleteImage = (idx: number): void => {
    images.splice(idx, 1);
};

export const setFavorite = (idx: number, isFavorite: boolean): void => {
    images[idx].isFavorite = isFavorite;
};

export const setNote = (idx: number, note: string): void => {
    images[idx].note = note;
};
