const {computeRatioFromMonzo} = require("../findTinaPrimaryCommas/utilities/ratioFromMonzo")
const {computeApotomeSlope} = require("../findTinaPrimaryCommas/utilities/apotomeSlope")
const {computeSopfgtt} = require("../findTinaPrimaryCommas/utilities/sopfgtt")
const {computeCommaName} = require("../findTinaPrimaryCommas/utilities/commaName")
const {computeLimit} = require("../findTinaPrimaryCommas/utilities/limit")
const {computeCentsFromRatio} = require("../findTinaPrimaryCommas/utilities/centsFromRatio")

const args = process.argv.slice(2)

const monzo = JSON.parse(args[0])

const ratio = computeRatioFromMonzo(monzo)

// TODO: this should be DRYed with what happens in commasFromFiveMonzo somehow
console.log(`comma name: ${computeCommaName(monzo)}`)
console.log(`cents: ${computeCentsFromRatio(ratio)}`)
console.log(`limit: ${computeLimit(monzo)}`)
console.log(`ratio: ${ratio.join("/")}`)
console.log(`SoPF>3: ${computeSopfgtt(monzo)}`)
console.log(`apotome slope: ${computeApotomeSlope(monzo)}`)
