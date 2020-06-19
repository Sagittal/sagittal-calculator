const {computeRatioFromMonzo} = require("../findTinaPrimaryCommas/utilities/ratioFromMonzo")

const args = process.argv.slice(2)

const monzo = args[0]

const ratio = computeRatioFromMonzo(JSON.parse(monzo))

console.log(ratio.join("/"))
//TODO: test
