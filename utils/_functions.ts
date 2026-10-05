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
