export const images: string[] = [];

// Load images from the "assets/images" folder
export const loadInitialImages = async () => {
    images.length = 0;
    images.push(require("../assets/images/one.png"));
    images.push(require("../assets/images/two.png"));
    images.push(require("../assets/images/three.png"));
    images.push(require("../assets/images/four.png"));
    images.push(require("../assets/images/five.png"));
    images.push(require("../assets/images/six.png"));
    images.push(require("../assets/images/seven.png"));
    images.push(require("../assets/images/eight.png"));
    images.push(require("../assets/images/nine.png"));
    images.push(require("../assets/images/ten.png"));
    images.push(require("../assets/images/eleven.png"));
};

export const getCurrentImages = () => {
    return images;
};

export const addImage = (path) => {
    images.push(path);
};

export const deleteImage = (idx) => {
    images.splice(idx, 1);
};
