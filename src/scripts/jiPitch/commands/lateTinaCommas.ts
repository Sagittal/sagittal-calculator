import { Io, ioSettings, isUndefined, LogTarget, Max, Prime, saveLog, Sopfr, stringify, time } from "../../../general"
import { CommaAnalysis } from "../../../sagittal"
import { computeCommas } from "../commas"
import { LIMITLESS_2_3_FREE_COPFR, LIMITLESS_N2D3P9, TINA_COMMAS_MAX_CENTS, TINA_COMMAS_MIN_CENTS } from "../constants"
import { jiPitchScriptGroupSettings } from "../globals"
import { parseFindCommasOptions, readFindCommasOptions } from "../io"
import { computeLateComma } from "../late"
import { computeCommaAnalysesSortedByTinaEntries } from "../tinas"
import { FindCommasOptions } from "../types"
import { applySharedPitchCommandSetup } from "./shared"

// Per http://forum.sagittal.org/viewtopic.php?p=2395#p2395

readFindCommasOptions()

applySharedPitchCommandSetup()

const MAX_POSSIBLE_2_3_FREE_SOPFR_WITHOUT_CRASHING = 127 as Max<Sopfr<{ rough: 5 }>>
const MAX_POSSIBLE_PRIME_LIMIT_GIVEN_MAX_POSSIBLE_SOPFR =
    MAX_POSSIBLE_2_3_FREE_SOPFR_WITHOUT_CRASHING as Max<Max<Prime>>

const DEFAULT_OVERRIDES: Partial<FindCommasOptions> = {
    max23FreeSopfr: MAX_POSSIBLE_2_3_FREE_SOPFR_WITHOUT_CRASHING,
    max23FreeCopfr: LIMITLESS_2_3_FREE_COPFR,
    maxPrimeLimit: MAX_POSSIBLE_PRIME_LIMIT_GIVEN_MAX_POSSIBLE_SOPFR,
}
const twoThreeFreeClassSettings = parseFindCommasOptions(DEFAULT_OVERRIDES)

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

if (ioSettings.time) saveLog(`\ntook ${time()}` as Io, LogTarget.ALL)