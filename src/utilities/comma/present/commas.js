const {FIND_COMMAS_HEADER_ROW} = require("./headerRow")
const {presentComma} = require("./comma")
const {alignTable} = require("../../table")

const presentCommas = commas => {
    const presentedCommas = commas.map(comma => presentComma(comma))
    presentedCommas.unshift(FIND_COMMAS_HEADER_ROW)

    return alignTable(presentedCommas).join("\n")
}


module.exports = {
    presentCommas,
}
