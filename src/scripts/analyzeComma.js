const {program} = require("commander")
const {computeMonzoFromRatio} = require("../utilities/comma/monzoFromRatio")
const {presentComma} = require("../utilities/comma/present/comma")
const {parseRatio} = require("../utilities/comma/ratio")
const {analyzeComma} = require("../utilities/comma/comma")

program
    .option("-m, --monzo <monzo>", "monzo", JSON.parse)
    .option("-r, --ratio <ratio>", "ratio", parseRatio)
    .option("-n, --name <name>", "comma name")
    .parse(process.argv)

const comma = program.args[0]

let monzo
if (comma) {
    if (comma.includes("/")) {
        monzo = computeMonzoFromRatio(parseRatio(comma))
    }
    if (comma.includes("[")) {
        monzo = JSON.parse(comma)
    }
} else if (program.monzo) {
    monzo = program.monzo
} else if (program.ratio) {
    monzo = computeMonzoFromRatio(program.ratio)
}

if (!monzo) throw new Error("Unable to determine monzo for comma.")

const analyzedComma = analyzeComma(monzo)

console.log(presentComma(analyzedComma, {mode: "DETAILS"}))
