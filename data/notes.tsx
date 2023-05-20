import { ImageSourcePropType } from "react-native";

export type Note = {
    title: string;
    content: string;
    image: ImageSourcePropType;
    date: string;
    text: string;
};
const notes: Note[] = [
    {
        title: "The Secrets of Ibiza Castle",
        content:
            "Experience the sensual secrets of the Castle of Ibiza and indulge in a romantic getaway filled with passion and adventure.",
        image: require("../assets/images/one.png"),
        date: "2021-01-01",
        text:
            "Nestled on a rocky promontory overlooking the sparkling Mediterranean Sea," +
            "the Castle of Ibiza is a breathtaking marvel of architecture and history." +
            "But beneath its ancient stone walls lies a world of sensual secrets, waiting" +
            "to be discovered by adventurous lovers.\n\n As night falls, the castle comes alive with the pulse of music and dance. Join" +
            "the pulsing throng of bodies and let the rhythm carry you away, spinning and" +
            "twirling under the starry sky.\n\nNote Finished - delete later",
    },
    {
        title: "Things of Ibiza's Day Life",
        content: "The day in Ibiza, with relaxation in mind!",
        image: null,
        date: "2021-01-02",
        text:
            "Beyond the pulsing nightlife and hedonistic parties," +
            "Ibiza's day life is a haven of relaxation, offering a" +
            "tranquil escape from the hustle and bustle of everyday life.\n\nDiscover" +
            "hidden coves and unspoiled nature reserves," +
            "where the only sounds are the chirping of birds and" +
            "the gentle rustling of leaves.",
    },
    {
        title: "Under the Palms",
        content: "It's actually really scary!",
        image: require("../assets/images/three.png"),
        date: "2021-01-03",
        text:
            "While the palm trees of Ibiza are synonymous with paradise and relaxation," +
            "they can pose a serious danger to those who use hallucinogens.\n\nIn certain cases, individuals who take hallucinogens" +
            "may experience a condition known as 'palinopsia' or 'visual snow'." +
            "This condition can cause a person's vision to become distorted, and palm trees may" +
            "appear to be moving in unnatural and menacing ways.\n\nWarn the homeless people - delete later",
    },
];

const notes2: Note[] = [
    {
        title: "Under the Palms",
        content: "It's actually really scary!",
        image: require("../assets/images/three.png"),
        date: "2021-01-03",
        text:
            "While the palm trees of Ibiza are synonymous with paradise and relaxation," +
            "they can pose a serious danger to those who use hallucinogens.\n\nIn certain cases, individuals who take hallucinogens" +
            "may experience a condition known as 'palinopsia' or 'visual snow'." +
            "This condition can cause a person's vision to become distorted, and palm trees may" +
            "appear to be moving in unnatural and menacing ways.\n\nWarn the homeless people - delete later",
    },

    {
        title: "Things of Ibiza's Day Life",
        content: "The day in Ibiza, with relaxation in mind!",
        image: null,
        date: "2021-01-02",
        text:
            "Beyond the pulsing nightlife and hedonistic parties," +
            "Ibiza's day life is a haven of relaxation, offering a" +
            "tranquil escape from the hustle and bustle of everyday life.\n\nDiscover" +
            "hidden coves and unspoiled nature reserves," +
            "where the only sounds are the chirping of birds and" +
            "the gentle rustling of leaves.",
    },
];

const notes3: Note[] = [
    {
        title: "The Secrets of Ibiza Castle",
        content:
            "Experience the sensual secrets of the Castle of Ibiza and indulge in a romantic getaway filled with passion and adventure.",
        image: require("../assets/images/one.png"),
        date: "2021-01-01",
        text:
            "Nestled on a rocky promontory overlooking the sparkling Mediterranean Sea," +
            "the Castle of Ibiza is a breathtaking marvel of architecture and history." +
            "But beneath its ancient stone walls lies a world of sensual secrets, waiting" +
            "to be discovered by adventurous lovers.\n\n As night falls, the castle comes alive with the pulse of music and dance. Join" +
            "the pulsing throng of bodies and let the rhythm carry you away, spinning and" +
            "twirling under the starry sky.\n\nNote Finished - delete later",
    },
];

const notes4: Note[] = [];

const notesMap: { [key: number]: Note[] } = {
    0: notes,
    1: notes2,
    2: notes3,
    3: notes4,
};

export const loadNotesByIdx = (idx: number): Note[] => {
    return notesMap[idx] || [];
};

export const addNote = (key : number, note: Note): void => {
    if (notesMap[key]) {
        notesMap[key].push(note);
    }
};

export const updateNote = (key : number, idx: number, note: Note): void => {
    if (notesMap[key]) {
        notesMap[key][idx] = note;
    }
};

export const deleteNote = (key : number, idx: number): void => {
    if (notesMap[key]) {
        notesMap[key].splice(idx,1);
    }

};
