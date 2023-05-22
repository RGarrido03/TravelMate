import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faSun, faBed, faPlaneUp } from "@fortawesome/free-solid-svg-icons";

const Expenses: Expenses[] = [];

export type Expenses = {
    date: string;
    icon: IconDefinition;
    title: string;
    cost: number;
};

const expense: Expenses[] = [
    {
        date: "Tue Ago 09 2022",
        icon: faSun,
        title: "Sunscreen",
        cost: 15.5,
    },
    {
        date: "Wed Mar 30 2022",
        icon: faBed,
        title: "Hotel",
        cost: 2500,
    },
    {
        date: "Wed Mar 30 2022",
        icon: faPlaneUp,
        title: "Flight",
        cost: 500,
    },
];

const expense1: Expenses[] = [
];

const expense2: Expenses[] = [
];

const expense3: Expenses[] = [
];


const expensesMap: { [key: number]: Expenses[] } = {
    0: expense,
    1: expense1,
    2: expense2,
    3: expense3,
};

export const loadExpensesByKey = (key: number): Expenses[] => {
    return expensesMap[key] || [];
};

export const getCurrentExpenses = (): Expenses[] => {
    return Expenses;
};

export const addExpenses = (key : number, expense: Expenses): void => {
    if (expensesMap[key]) {
        expensesMap[key].push(expense);
    }
};

export const deleteExpenses = (key : number, idx: number): void => {
    if (expensesMap[key]) {
        expensesMap[key].splice(idx,1);
    }
};

export const editExpenses = (key : number, idx: number, expense: Expenses): void => {
    if (expensesMap[key]) {
        expensesMap[key][idx] = expense;
    }
}

