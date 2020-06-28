const {MAXIMUM_POSITION} = require("../../../notations/ji/intervals")
const {computeX} = require("./x")
const {LEVEL_BOTTOMS} = require("./levelHeights")
const {MARGIN} = require("./sizes")

const addParentSvg = () => {
    const width = computeX(MARGIN + MAXIMUM_POSITION)
    const height = LEVEL_BOTTOMS["MEDIUM"]

    return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">\n`
}

module.exports = {
    addParentSvg,
}