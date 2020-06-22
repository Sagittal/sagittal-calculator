const {presentMonzo} = require("./monzo")
const {presentRatio} = require("./ratio")

const presentComma = (comma, {mode = "SUMMARY"} = {}) => {
    const {
        commaName,
        cents,
        monzo,
        ratio,
        limit,
        apotomeSlope,
        sopfgtt,
    } = comma

    if (mode === "DETAILS") {
        return [
            `comma name:\t${commaName}`,
            `limit:\t${limit}`,
            `SoPF>3:\t${sopfgtt}`,
            `cents:\t${cents}`,
            `ratio:\t${presentRatio(ratio)}`,
            `apotome slope:\t${apotomeSlope}`,
        ].join("\n")
    } else {
        return [
            commaName,
            limit,
            sopfgtt,
            cents,
            presentMonzo(monzo),
            presentRatio(ratio),
            apotomeSlope,
        ].join("\t")
    }
}

module.exports = {
    presentComma,
}
