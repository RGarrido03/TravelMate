import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faSun, faMuseum } from "@fortawesome/free-solid-svg-icons";

const POIs: POIs[] = [];

export type POIs = {
    date: string;
    icon: IconDefinition;
    title: string;
    image: any;
};
export const loadInitialPOIs = async () => {
    POIs.length = 0;
    POIs.push({
        date: "A day ago",
        icon: faSun,
        title:"Playa de Las Ensinas",
        image: null,
    });
    POIs.push({
        date: "3 days ago",
        icon: faMuseum,
        title:"Museum Puget",
        image: null,
    });
    POIs.push({
        date: "4 days ago",
        icon: faSun,
        title:"Playa de Cala Bassa",
        image: require("../assets/images/three.png"),
    });
};

export const getCurrentPOIs = () => {
    return POIs;
};

export const addPOIs = (poi: POIs) => {
    POIs.push(poi);
};

export const deletePOIs = (idx: number) => {
    POIs.splice(idx, 1);
};
