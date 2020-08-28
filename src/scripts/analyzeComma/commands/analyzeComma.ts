import { computeMonzoFromCommand, formatComma } from "../../../general"
import { analyzeComma } from "../../../notations"

const monzo = computeMonzoFromCommand()

const analyzedComma = analyzeComma(monzo)

console.log(formatComma(analyzedComma, { mode: "details" }))
