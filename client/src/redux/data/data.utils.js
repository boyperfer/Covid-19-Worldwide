import countriesArray from "../../assets/data/countryflag.json";

export const codeHarsh = countriesArray.reduce((map, obj) => {
    map[obj.Name.replace(/\s+/g, "").toLowerCase()] = obj.Code.toLowerCase();
    return map;
}, {});

export const objectHarsh = (data) => {
    return data.reduce((map, obj) => {
        map[obj.name.replace(/\s+/g, "").toLowerCase()] = { ...obj };
        return map;
    }, {});
};

export const getDate = (int) => {
    const date = new Date(int);
    return date.toLocaleString();
};

export const objectFilter = (obj, predicate) =>
    Object.keys(obj)
        .filter((key) => predicate(obj[key]))
        .reduce((res, key) => ((res[key] = obj[key]), res), {});

export const sumCases = (data) =>
    data.map((obj) => obj.confirmed).reduce((a, b) => a + b, 0);
