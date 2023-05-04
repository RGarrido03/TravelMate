const notes: Note[] = [];

export type Note = {
    title: string;
    content: string;
    image: string;
    date: string;
    texto: string;
};
export const loadInitialNotes = (): void => {
    notes.length = 0;
    notes.push({
        title: "The Secrets of Ibiza Castle",
        content: "Experience the sensual secrets of the Castle of Ibiza and indulge in a romantic getaway filled with passion and adventure.",
        image: require("../assets/images/one.png"),
        date: "2021-01-01",
        texto: "Nestled on a rocky promontory overlooking the sparkling Mediterranean Sea," +
        "the Castle of Ibiza is a breathtaking marvel of architecture and history." + 
        "But beneath its ancient stone walls lies a world of sensual secrets, waiting" +
        "to be discovered by adventurous lovers.\n\n As night falls, the castle comes alive with the pulse of music and dance. Join" + 
        "the pulsing throng of bodies and let the rhythm carry you away, spinning and" +
        "twirling under the starry sky.\n\nNote Finished - delete later"

    });
    notes.push({
        title: "Things of Ibiza's Day Life",
        content: "The day in Ibiza, with relaxation in mind!",
        image: null,
        date: "2021-01-02",
        texto: "Beyond the pulsing nightlife and hedonistic parties," + 
        "Ibiza's day life is a haven of relaxation, offering a" +
        "tranquil escape from the hustle and bustle of everyday life.\n\nDiscover" + 
        "hidden coves and unspoiled nature reserves," +
        "where the only sounds are the chirping of birds and" +
        "the gentle rustling of leaves."
    });
    notes.push({
        title: "Under the Palms",
        content: "It's actually really scary!",
        image: require("../assets/images/three.png"),
        date: "2021-01-03",
        texto: "While the palm trees of Ibiza are synonymous with paradise and relaxation," + 
        "they can pose a serious danger to those who use hallucinogens.\n\nIn certain cases, individuals who take hallucinogens" +
        "may experience a condition known as 'palinopsia' or 'visual snow'." +
        "This condition can cause a person's vision to become distorted, and palm trees may" +
        "appear to be moving in unnatural and menacing ways.\n\nWarn the homeless people - delete later"
    });
};

export const getCurrentNotes = (): Note[] => {
    return notes;
};

export const addNote = (note: Note): void => {
    notes.push(note);
};

export const deleteNote = (idx: number): void => {
    notes.splice(idx, 1);
};
