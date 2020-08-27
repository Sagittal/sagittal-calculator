import { computeMonzoFromCommand } from "../../../general"
import { analyzeComma, formatComma } from "../../../notations"

const monzo = computeMonzoFromCommand()

const analyzedComma = analyzeComma(monzo)

console.log(formatComma(analyzedComma, { mode: "details" }))
