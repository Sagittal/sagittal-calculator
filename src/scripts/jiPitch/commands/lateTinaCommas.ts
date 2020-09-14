import { Io, isUndefined, LogTarget, Max, Prime, saveLog, Sopfr, stringify } from "../../../general"
import { CommaAnalysis } from "../../../sagittal"
import { computeCommas } from "../commas"
import { LIMITLESS_N2D3P9, TINA_COMMAS_MAX_CENTS, TINA_COMMAS_MIN_CENTS } from "../constants"
import { jiPitchScriptGroupSettings } from "../globals"
import { parse23FreeClassSettings, readTwoThreeFreeClassOptions } from "../io"
import { computeLateComma } from "../late"
import { computeCommaAnalysesSortedByTinaEntries } from "../tinas"
import { TwoThreeFreeClassSettings } from "../types"
import { applySharedPitchCommandSetup } from "./shared"

// Per http://forum.sagittal.org/viewtopic.php?p=2395#p2395

readTwoThreeFreeClassOptions()

applySharedPitchCommandSetup()

const MAX_POSSIBLE_2_3_FREE_SOPFR_WITHOUT_CRASHING = 127 as Max<Sopfr<{ rough: 5 }>>
const MAX_POSSIBLE_PRIME_LIMIT_GIVEN_MAX_POSSIBLE_SOPFR =
    MAX_POSSIBLE_2_3_FREE_SOPFR_WITHOUT_CRASHING as Max<Max<Prime>>

const DEFAULT_OVERRIDES: Partial<TwoThreeFreeClassSettings> = {
    max23FreeSopfr: MAX_POSSIBLE_2_3_FREE_SOPFR_WITHOUT_CRASHING,
    maxPrimeLimit: MAX_POSSIBLE_PRIME_LIMIT_GIVEN_MAX_POSSIBLE_SOPFR,
}
const twoThreeFreeClassSettings = parse23FreeClassSettings(DEFAULT_OVERRIDES)

const commas = computeCommas({
    ...jiPitchScriptGroupSettings,
    ...twoThreeFreeClassSettings,
    minCents: TINA_COMMAS_MIN_CENTS,
    maxCents: TINA_COMMAS_MAX_CENTS,
    maxN2D3P9: LIMITLESS_N2D3P9,
})

const commaAnalysesSortedByTinaEntries = computeCommaAnalysesSortedByTinaEntries(commas)

commaAnalysesSortedByTinaEntries.forEach(([tina, tinaCommaAnalyses]: [string, CommaAnalysis[]]): void => {
    if (!tinaCommaAnalyses.length) {
        saveLog(`NO COMMAS given current constraints for tina ${tina}.` as Io, LogTarget.ALL)
    } else {
        saveLog(
            // tslint:disable-next-line:max-line-length
            `Processing tina ${tina} with ${tinaCommaAnalyses.length} possible commas to check, sorted by increasing N2D3P9` as Io,
            LogTarget.PROGRESS,
        )

        const lateComma = computeLateComma(tinaCommaAnalyses)

        if (isUndefined(lateComma)) {
            saveLog(`NO LATE COMMAS given current constraints for tina ${tina}.` as Io, LogTarget.ALL)
        } else {
            saveLog(`TINA ${tina}: ${stringify(lateComma)}` as Io, LogTarget.ALL)
        }
    }
})
