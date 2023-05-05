import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faSun, faMuseum } from "@fortawesome/free-solid-svg-icons";

const POIs: POIs[] = [];

export type POIs = {
    date: string;
    icon: IconDefinition;
    title: string;
    image: any;
    text: string;
};
export const loadInitialPOIs = (): void => {
    POIs.length = 0;
    POIs.push({
        date: "A day ago",
        icon: faSun,
        title: "Playa de Las Ensinas",
        image: null,
        text: "Playa de Las Salinas is known for its stunning white sand, crystal-clear water, and lively beach clubs, making it one of the most popular beaches in Ibiza."
    });
    POIs.push({
        date: "3 days ago",
        icon: faMuseum,
        title: "Museum Puget",
        image: null,
        text: "Museum Puget is a hidden gem in Ibiza's Old Town, showcasing a collection of exquisite art and artifacts that offer a glimpse into the island's rich history and culture."
    });
    POIs.push({
        date: "4 days ago",
        icon: faSun,
        title: "Playa de Cala Bassa",
        image: require("../assets/images/three.png"),
        text: "Playa de Cala Bassa is a tranquil and picturesque beach located on Ibiza's western coast, known for its turquoise waters, soft white sand, and stunning sunsets."
    });
};

export const getCurrentPOIs = (): POIs[] => {
    return POIs;
};

export const addPOIs = (poi: POIs): void => {
    POIs.push(poi);
};

export const deletePOIs = (idx: number): void => {
    POIs.splice(idx, 1);
};
