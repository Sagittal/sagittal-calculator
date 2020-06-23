const {computeMonzoFromRatio} = require("../utilities/comma/monzoFromRatio")
const {presentComma} = require("../utilities/comma/present/comma")
const {analyzeComma} = require("../utilities/comma/comma")

const args = process.argv.slice(2)

const ratio = args[0].split("/")

const monzo = computeMonzoFromRatio(ratio)
const analyzedComma = analyzeComma(monzo)

console.log(presentComma(analyzedComma, {mode: "DETAILS"}))
