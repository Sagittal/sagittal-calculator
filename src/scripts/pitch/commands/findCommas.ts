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
import { PITCH_SCRIPT_GROUP } from "../constants"
import { pitchScriptGroupSettings } from "../globals"
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

const commas = computeCommas({ ...pitchScriptGroupSettings, ...twoThreeFreeClassSettings })

const commasWithMaybeSymbols = commas.map(addMaybeJiSymbol)
const analyzedCommas = commasWithMaybeSymbols.map(comma => {
    // TODO: check that every time this happens it uses the comma Name options?
    return analyzeComma(comma, pitchScriptGroupSettings.commaNameOptions)
})
if (pitchScriptGroupSettings.sortKey) {
    sort(analyzedCommas, { by: pitchScriptGroupSettings.sortKey })
}

saveLog(formatSettings(), LogTarget.ALL, PITCH_SCRIPT_GROUP)
saveLog(addTexts(format23FreeClassSettings(twoThreeFreeClassSettings), NEWLINE), LogTarget.ALL, PITCH_SCRIPT_GROUP)

saveLog(computeFindCommasTable(analyzedCommas), LogTarget.ALL, PITCH_SCRIPT_GROUP)
