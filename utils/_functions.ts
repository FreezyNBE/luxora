import { countryList } from "./list_countries";

export const validateEmail = (email: string) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        );
};

export function getIndexByCountry(name = "Romania") {
    return countryList.findIndex((country) => country === name);
}

export function letterCapitalize(string: string) {
    return String(string).charAt(0).toUpperCase() + String(string).slice(1);
}

export function isAmountDecimal(amount: string) {
    return /^\d*\.?\d{0,2}$/.test(amount);
}

export function formatDate(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

export function getAllowTypePictures(types: string[]) {
    return types.map((t) => t.split("/")[1]).join(", ");
}

export function isValidDate(date: Date) {
    return date && Number.isFinite(date.getTime());
}
