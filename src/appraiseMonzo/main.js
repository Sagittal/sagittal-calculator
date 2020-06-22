const {presentComma} = require("../findTinaPrimaryCommas/present/comma")
const {analyzeComma} = require("../findTinaPrimaryCommas/analyze/comma")

const args = process.argv.slice(2)

const monzo = JSON.parse(args[0])

const analyzedComma = analyzeComma(monzo)

console.log(presentComma(analyzedComma, {mode: "DETAILS"}))
