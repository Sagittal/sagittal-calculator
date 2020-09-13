import { program } from "commander"
import { addTexts, CommandFlag, LogTarget, Max, NEWLINE, Prime, saveLog, sort } from "../../../general"
import {
    addMaybeJiSymbol,
    analyzeComma,
    DEFAULT_MAX_PRIME_LIMIT,
    DEFAULT_MAX_TWO_THREE_FREE_COPFR,
    DEFAULT_MAX_TWO_THREE_FREE_SOPFR,
} from "../../../sagittal"
import { computeCommas } from "../commas"
import { jiPitchScriptGroupSettings } from "../globals"
import { computeFindCommasTable, format23FreeClassSettings, formatSettings } from "../io"
import { applySharedPitchCommandSetup } from "./shared"

program
    .option(
        `-${CommandFlag.PRIME_LIMIT}, --max-prime-limit <maxPrimeLimit>`,
        "max prime limit",
        parseInt,
    )
    .option(
        `-${CommandFlag.TWO_THREE_FREE_SOPFR}, --max-2-3-free-sopfr <max23FreeSopfr>`,
        "max 2,3-free sopfr",
        parseInt,
    )
    .option(
        `-${CommandFlag.TWO_THREE_FREE_COPFR}, --max-2-3-free-copfr <max23FreeCopfr>`,
        "max 2,3-free copfr",
        parseInt,
    )

applySharedPitchCommandSetup()

const max23FreeSopfr = program.max23FreeSopfr || DEFAULT_MAX_TWO_THREE_FREE_SOPFR
const max23FreeCopfr = program.max23FreeCopfr || DEFAULT_MAX_TWO_THREE_FREE_COPFR
const maxPrimeLimit: Max<Max<Prime>> = program.maxPrimeLimit || DEFAULT_MAX_PRIME_LIMIT

const twoThreeFreeClassSettings = { max23FreeSopfr, max23FreeCopfr, maxPrimeLimit }

const commas = computeCommas({ ...jiPitchScriptGroupSettings, ...twoThreeFreeClassSettings })

const commasWithMaybeSymbols = commas.map(addMaybeJiSymbol)
const commaAnalyses = commasWithMaybeSymbols.map(comma => {
    return analyzeComma(comma, jiPitchScriptGroupSettings.commaNameOptions)
})
if (jiPitchScriptGroupSettings.sortKey) {
    sort(commaAnalyses, { by: jiPitchScriptGroupSettings.sortKey })
}

saveLog(formatSettings(), LogTarget.ALL)
saveLog(addTexts(format23FreeClassSettings(twoThreeFreeClassSettings), NEWLINE), LogTarget.ALL)

saveLog(computeFindCommasTable(commaAnalyses), LogTarget.ALL)
