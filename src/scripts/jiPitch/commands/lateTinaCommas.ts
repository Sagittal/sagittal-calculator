import {
    Io,
    ioSettings,
    isEmpty,
    isUndefined,
    LogTarget,
    Max,
    Prime,
    saveLog,
    Sopfr,
    stringify,
    time,
} from "../../../general"
import {CommaAnalysis} from "../../../sagittal"
import {computeCommas, computeFindCommasSettings, FindCommasSettings} from "../findCommas"
import {jiPitchScriptGroupSettings} from "../globals"
import {readFindCommasOptions} from "../io"
import {
    computeCommaAnalysesSortedByTinaEntries,
    computeLateCommaAnalysis,
    INFINITE_2_3_FREE_COPFR,
    INFINITE_N2D3P9,
    TINA_COMMAS_LOWER_BOUND,
    TINA_COMMAS_UPPER_BOUND,
} from "../lateTinaCommas"
import {applySharedJiPitchCommandSetup} from "./shared"

// Per http://forum.sagittal.org/viewtopic.php?p=2395#p2395

readFindCommasOptions()

applySharedJiPitchCommandSetup()

ioSettings.logTargets[LogTarget.ERROR] = true

const MAX_POSSIBLE_2_3_FREE_SOPFR_WITHOUT_CRASHING = 127 as Max<Sopfr<{rough: 5}>>
const MAX_POSSIBLE_PRIME_LIMIT_GIVEN_MAX_POSSIBLE_SOPFR =
    MAX_POSSIBLE_2_3_FREE_SOPFR_WITHOUT_CRASHING as Max<Max<Prime>>

const DEFAULT_OVERRIDES: Partial<FindCommasSettings> = {
    max23FreeSopfr: MAX_POSSIBLE_2_3_FREE_SOPFR_WITHOUT_CRASHING,
    max23FreeCopfr: INFINITE_2_3_FREE_COPFR,
    maxPrimeLimit: MAX_POSSIBLE_PRIME_LIMIT_GIVEN_MAX_POSSIBLE_SOPFR,
}
const findCommasSettings = computeFindCommasSettings(DEFAULT_OVERRIDES)

const commas = computeCommas({
    ...jiPitchScriptGroupSettings,
    ...findCommasSettings,
    lowerBound: TINA_COMMAS_LOWER_BOUND,
    upperBound: TINA_COMMAS_UPPER_BOUND,
    maxN2D3P9: INFINITE_N2D3P9,
})

const commaAnalysesSortedByTinaEntries = computeCommaAnalysesSortedByTinaEntries(commas)

commaAnalysesSortedByTinaEntries.forEach(([tina, tinaCommaAnalyses]: [string, CommaAnalysis[]]): void => {
    if (isEmpty(tinaCommaAnalyses)) {
        saveLog(`NO COMMAS given current constraints for tina ${tina}.`, LogTarget.ERROR)
    } else {
        saveLog(
            // tslint:disable-next-line max-line-length
            `Processing tina ${tina} with ${tinaCommaAnalyses.length} possible commas to check, sorted by increasing N2D3P9` as Io,
            LogTarget.PROGRESS,
        )

        const lateCommaAnalysis = computeLateCommaAnalysis(tinaCommaAnalyses)

        if (isUndefined(lateCommaAnalysis)) {
            saveLog(`NO LATE COMMAS given current constraints for tina ${tina}.`, LogTarget.ERROR)
        } else {
            saveLog(`TINA ${tina}: ${stringify(lateCommaAnalysis)}`, LogTarget.FINAL)
        }
    }
})

if (ioSettings.time) saveLog(`\ntook ${time()}`, LogTarget.FINAL)
