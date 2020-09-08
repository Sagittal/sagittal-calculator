import { program } from "commander"
import { CommandFlag, LogTarget, Max, Prime, saveLog } from "../../../general"
import {
    addMaybeJiSymbol,
    DEFAULT_MAX_PRIME_LIMIT,
    DEFAULT_MAX_TWO_THREE_FREE_COPFR,
    DEFAULT_MAX_TWO_THREE_FREE_SOPFR,
} from "../../../sagittal"
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
        `-${CommandFlag.TWO_THREE_FREE_SOPFR}, --max-2-3-free-sopfr <maxTwoThreeFreeSopfr>`,
        "max 2,3-free sopfr",
        parseInt,
    )
    .option(
        `-${CommandFlag.TWO_THREE_FREE_COPFR}, --max-2-3-free-copfr <maxTwoThreeFreeCopfr>`,
        "max 2,3-free copfr",
        parseInt,
    )

applySharedPitchCommandSetup()

const maxTwoThreeFreeSopfr = program.maxTwoThreeFreeSopfr || DEFAULT_MAX_TWO_THREE_FREE_SOPFR
const maxTwoThreeFreeCopfr = program.maxTwoThreeFreeCopfr || DEFAULT_MAX_TWO_THREE_FREE_COPFR
const maxPrimeLimit: Max<Max<Prime>> = program.maxPrimeLimit || DEFAULT_MAX_PRIME_LIMIT

const commas = computeCommas({
    ...pitchScriptGroupSettings,
    maxTwoThreeFreeCopfr,
    maxTwoThreeFreeSopfr,
    maxPrimeLimit,
})

const commasWithMaybeSymbols = commas.map(addMaybeJiSymbol)

saveLog(computeFindCommasTable(commasWithMaybeSymbols), LogTarget.ALL, PITCH_SCRIPT_GROUP)
