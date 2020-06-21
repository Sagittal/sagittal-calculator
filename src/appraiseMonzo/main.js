const {computeRatioFromMonzo} = require("../findTinaPrimaryCommas/utilities/ratioFromMonzo")
const {computeApotomeSlope} = require("../findTinaPrimaryCommas/utilities/apotomeSlope")
const {computeSopfgtt} = require("../findTinaPrimaryCommas/utilities/sopfgtt")

const args = process.argv.slice(2)

const monzo = JSON.parse(args[0])

const ratio = computeRatioFromMonzo(monzo)

console.log(`ratio: ${ratio.join("/")}`)
console.log(`SoPF>3: ${computeSopfgtt(monzo)}`)
console.log(`apotome slope: ${computeApotomeSlope(monzo)}`)
