const notes: Note[] = [];

export type Note = {
    title: string;
    content: string;
    image: string;
    date: string;
};
export const loadInitialNotes = (): void => {
    notes.length = 0;
    notes.push({
        title: "The Secrets of Ibiza Castle",
        content: "Experience the sensual secrets of the Castle of Ibiza and indulge in a romantic getaway filled with passion and adventure.",
        image: require("../assets/images/one.png"),
        date: "2021-01-01",
    });
    notes.push({
        title: "Things of Ibiza's Day Life",
        content: "The day in Ibiza, with relaxation in mind!",
        image: null,
        date: "2021-01-02",
    });
    notes.push({
        title: "Under the Palms",
        content: "It's actually really scary!",
        image: require("../assets/images/three.png"),
        date: "2021-01-03",
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
