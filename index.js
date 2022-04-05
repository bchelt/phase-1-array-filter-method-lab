// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter((element) => name.toLowerCase() === element.toLowerCase());
}

function fuzzyMatch(drivers, query) {
    return drivers.filter((element) => element.substring(0, query.length) === query);
}

function matchName(drivers, name) {
    return drivers.filter((element) => element.name === name);
}