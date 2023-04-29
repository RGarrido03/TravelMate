import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faSun, faBed, faPlaneUp } from "@fortawesome/free-solid-svg-icons";

const Expenses: Expenses[] = [];

export type Expenses = {
    date: Date;
    icon: IconDefinition;
    title: string;
    cost: number;
};
export const loadInitialExpenses = async () => {
    Expenses.length = 0;
    Expenses.push({
        date: new Date("2022-08-10"),
        icon: faSun,
        title: "Sunscreen",
        cost: 15.5,
    });
    Expenses.push({
        date: new Date("2022-03-29"),
        icon: faBed,
        title: "Hotel",
        cost: 2500,
    });
    Expenses.push({
        date: new Date("2022-03-29"),
        icon: faPlaneUp,
        title: "Flight",
        cost: 500,
    });
};

export const getCurrentExpenses = () => {
    return Expenses;
};

export const addExpenses = (expense: Expenses) => {
    Expenses.push(expense);
};

export const deleteExpenses = (idx: number) => {
    Expenses.splice(idx, 1);
};
