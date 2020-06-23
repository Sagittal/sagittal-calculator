const {computeMonzoFromRatio} = require("../findCommas/utilities/monzoFromRatio")
const {presentComma} = require("../findCommas/present/comma")
const {analyzeComma} = require("../findCommas/analyze/comma")

const args = process.argv.slice(2)

const ratio = args[0].split("/")

const monzo = computeMonzoFromRatio(ratio)
const analyzedComma = analyzeComma(monzo)

console.log(presentComma(analyzedComma, {mode: "DETAILS"}))
