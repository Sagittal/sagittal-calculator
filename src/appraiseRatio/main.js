const {computeMonzoFromRatio} = require("../findTinaPrimaryCommas/utilities/monzoFromRatio")
const {presentComma} = require("../findTinaPrimaryCommas/present/comma")
const {analyzeComma} = require("../findTinaPrimaryCommas/analyze/comma")

const args = process.argv.slice(2)

const ratio = args[0].split("/")

const monzo = computeMonzoFromRatio(ratio)
const analyzedComma = analyzeComma(monzo)

console.log(presentComma(analyzedComma, {mode: "DETAILS"}))
