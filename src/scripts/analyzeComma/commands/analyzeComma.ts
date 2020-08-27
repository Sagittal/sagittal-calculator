import { program } from "commander"
import { computeMonzoFromRatio, parseMonzo, parseRatio } from "../../../general"
import { analyzeComma, formatComma } from "../../../notations"

program
    .option("-m, --monzo <monzo>", "monzo", parseMonzo)
    .option("-r, --ratio <ratio>", "ratio", parseRatio)
    .parse(process.argv)

const comma = program.args[ 0 ]

let monzo
if (comma) {
    if (comma.includes("/")) {
        monzo = computeMonzoFromRatio(parseRatio(comma))
    }
    if (comma.includes("[") || comma.includes("|") || comma.includes(">") || comma.includes("⟩") || comma.includes("]")) {
        monzo = parseMonzo(comma)
    }
} else if (program.monzo) {
    monzo = program.monzo
} else if (program.ratio) {
    monzo = computeMonzoFromRatio(program.ratio)
}

if (!monzo) {
    throw new Error("Unable to determine monzo for comma.")
}

const analyzedComma = analyzeComma(monzo)

console.log(formatComma(analyzedComma, { mode: "details" }))
