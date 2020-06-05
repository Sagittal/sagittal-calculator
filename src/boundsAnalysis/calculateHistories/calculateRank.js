const calculateRank = (type, withinHalfLevelEda) => {
    if (type === "EDA") {
        return withinHalfLevelEda ? 1 : 4
    }
    if (type === "MEAN") {
        return withinHalfLevelEda ? 2 : 5
    }
    if (type === "SIZE") {
        return withinHalfLevelEda ? 3 : 6
    }
    if (type === 'override') {
        return 7
    }
    if (type === 'impossible') {
        return 8
    }
}

module.exports = {
    calculateRank,
}
