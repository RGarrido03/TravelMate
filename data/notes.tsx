const notes: Note[] = [];

export type Note = {
    title: string;
    content: string;
    image: string;
    date: string;
};
export const loadInitialNotes = async () => {
    notes.length = 0;
    notes.push({
        title: "Note 1",
        content: "This is the first note",
        image: require("../assets/images/one.png"),
        date: "2021-01-01",
    });
    notes.push({
        title: "Note 2",
        content: "This is the second note",
        image: null,
        date: "2021-01-02",
    });
    notes.push({
        title: "Note 3",
        content: "This is the third note",
        image: require("../assets/images/three.png"),
        date: "2021-01-03",
    });
};

export const getCurrentNotes = () => {
    return notes;
};

export const addNote = (note: Note) => {
    notes.push(note);
};

export const deleteNote = (idx: number) => {
    notes.splice(idx, 1);
};
