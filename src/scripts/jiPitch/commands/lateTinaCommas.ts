import {
    computeIsEmpty,
    Io,
    ioSettings,
    isUndefined,
    LogTarget,
    Max,
    Prime,
    saveLog,
    Sopfr,
    stringify,
    time,
} from "../../../general"
import { CommaAnalysis } from "../../../sagittal"
import { computeCommas, FindCommasSettings, parseFindCommasSettings } from "../findCommas"
import { jiPitchScriptGroupSettings } from "../globals"
import { readFindCommasOptions } from "../io"
import {
    computeCommaAnalysesSortedByTinaEntries,
    computeLateComma,
    INFINITE_2_3_FREE_COPFR,
    INFINITE_N2D3P9,
    TINA_COMMAS_MAX_CENTS,
    TINA_COMMAS_MIN_CENTS,
} from "../lateTinaCommas"
import { applySharedPitchCommandSetup } from "./shared"

// Per http://forum.sagittal.org/viewtopic.php?p=2395#p2395

readFindCommasOptions()

applySharedPitchCommandSetup()

const MAX_POSSIBLE_2_3_FREE_SOPFR_WITHOUT_CRASHING = 127 as Max<Sopfr<{ rough: 5 }>>
const MAX_POSSIBLE_PRIME_LIMIT_GIVEN_MAX_POSSIBLE_SOPFR =
    MAX_POSSIBLE_2_3_FREE_SOPFR_WITHOUT_CRASHING as Max<Max<Prime>>

const DEFAULT_OVERRIDES: Partial<FindCommasSettings> = {
    max23FreeSopfr: MAX_POSSIBLE_2_3_FREE_SOPFR_WITHOUT_CRASHING,
    max23FreeCopfr: INFINITE_2_3_FREE_COPFR,
    maxPrimeLimit: MAX_POSSIBLE_PRIME_LIMIT_GIVEN_MAX_POSSIBLE_SOPFR,
}
const findCommasSettings = parseFindCommasSettings(DEFAULT_OVERRIDES)

const commas = computeCommas({
    ...jiPitchScriptGroupSettings,
    ...findCommasSettings,
    minCents: TINA_COMMAS_MIN_CENTS,
    maxCents: TINA_COMMAS_MAX_CENTS,
    maxN2D3P9: INFINITE_N2D3P9,
})

const commaAnalysesSortedByTinaEntries = computeCommaAnalysesSortedByTinaEntries(commas)

commaAnalysesSortedByTinaEntries.forEach(([tina, tinaCommaAnalyses]: [string, CommaAnalysis[]]): void => {
    if (computeIsEmpty(tinaCommaAnalyses)) {
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
