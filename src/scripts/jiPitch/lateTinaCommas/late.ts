import {Comma, count, Exponent, increment, Io, LogTarget, Maybe, min, Prime, saveLog} from "@sagittal/general"
import {
    CommaAnalysis,
    computeAte,
    findNotatingCommas,
    MAX_N2D3P9_FOR_WHICH_POSSIBLE_NUMERATORS_ARE_KNOWN,
} from "@sagittal/system"
import {jiPitchScriptGroupSettings} from "../globals"

const isCommaLate = (comma: Comma): boolean => {
    const ate = computeAte(comma)

    const notatingCommas = findNotatingCommas(
        comma,
        {...jiPitchScriptGroupSettings, maxN2D3P9: MAX_N2D3P9_FOR_WHICH_POSSIBLE_NUMERATORS_ARE_KNOWN},
    )
    const ates = notatingCommas.map((notatingComma: Comma): Exponent<Prime> => {
        return computeAte(notatingComma)
    })

    saveLog(`ATE ${ate} vs. other notating comma ATEs ${ates}`, LogTarget.PROGRESS)

    const minimumAte = min(...ates)

    return ate === minimumAte as Exponent<Prime>
}

const computeLateCommaAnalysis = (tinaCommaAnalyses: CommaAnalysis[]): Maybe<CommaAnalysis> => {
    let index = 0
    let lateComma = undefined
    while (index < count(tinaCommaAnalyses)) {
        const tinaCommaAnalysis = tinaCommaAnalyses[index]

        saveLog(
            `Checking comma ${index}: ${tinaCommaAnalysis.monzo}, N2D3P9 ${tinaCommaAnalysis.two3FreeClassAnalysis.n2d3p9}` as Io,
            LogTarget.PROGRESS,
        )
        if (isCommaLate(tinaCommaAnalysis.pitch)) {
            lateComma = tinaCommaAnalysis
            break
        }
        index = increment(index)
    }

    return lateComma
}

export {
    isCommaLate,
    computeLateCommaAnalysis,
}
