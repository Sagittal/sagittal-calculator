const {computeMonzoFromRatio} = require("../findTinaPrimaryCommas/utilities/monzoFromRatio")

const args = process.argv.slice(2)

const ratio = args[0].split("/")

const monzo = computeMonzoFromRatio(ratio)

console.log(monzo)
