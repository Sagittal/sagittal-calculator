const {presentComma} = require("../utilities/comma/present/comma")
const {analyzeComma} = require("../utilities/comma/comma")

const args = process.argv.slice(2)

const monzo = JSON.parse(args[0])

const analyzedComma = analyzeComma(monzo)

console.log(presentComma(analyzedComma, {mode: "DETAILS"}))
