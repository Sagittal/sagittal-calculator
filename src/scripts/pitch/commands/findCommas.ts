import { program } from "commander"
import { CommandFlag, LogTarget, saveLog } from "../../../general"
import { addMaybeSagittalSymbol } from "../addMaybeSagittalSymbol"
import { computeCommas } from "../commas"
import { PITCH_SCRIPT_GROUP } from "../constants"
import { pitchScriptGroupSettings } from "../globals"
import { computeFindCommasTable } from "../io"
import { applySharedPitchCommandSetup } from "./shared"

program
    .option(
        `-${CommandFlag.PRIME_LIMIT}, --max-prime-limit <maxPrimeLimit>`,
        "max prime limit",
        parseInt,
    )
    .option(
        `-${CommandFlag.FIVE_ROUGH_SOPFR}, --max-five-rough-sopfr <maxFiveRoughSopfr>`,
        "max 5-rough sopfr",
        parseInt,
    )
    .option(
        `-${CommandFlag.FIVE_ROUGH_COPFR}, --max-five-rough-copfr <maxFiveRoughCopfr>`,
        "max 5-rough copfr",
        parseInt,
    )

applySharedPitchCommandSetup()

const maxFiveRoughSopfr = program.maxFiveRoughSopfr || 61
const maxFiveRoughCopfr = program.maxFiveRoughCopfr || 555 // A silly number, unlikely to come close
const maxPrimeLimit = program.maxPrimeLimit || 47

const commas = computeCommas({
    ...pitchScriptGroupSettings,
    maxFiveRoughCopfr,
    maxFiveRoughSopfr,
    maxPrimeLimit,
})

const commasWithMaybeSymbols = commas.map(addMaybeSagittalSymbol)

saveLog(computeFindCommasTable(commasWithMaybeSymbols), LogTarget.ALL, PITCH_SCRIPT_GROUP)
