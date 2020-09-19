import { Comma, count, Exponent, increment, Io, LogTarget, Maybe, min, Prime, saveLog } from "../../../general"
import { CommaAnalysis, computeAte, computeNotatingCommas } from "../../../sagittal"
import { jiPitchScriptGroupSettings } from "../globals"
import { INFINITE_N2D3P9 } from "./constants"

const computeIsCommaLate = (commaAnalysis: CommaAnalysis): boolean => {
    const ate = computeAte(commaAnalysis)

    const notatingCommas =
        computeNotatingCommas(commaAnalysis, { ...jiPitchScriptGroupSettings, maxN2D3P9: INFINITE_N2D3P9 })
    const ates = notatingCommas.map((notatingComma: Comma): Exponent<Prime> => {
        return computeAte(notatingComma)
    })

    saveLog(`ATE ${ate} vs. other notating comma ATEs ${ates}` as Io, LogTarget.PROGRESS)

    const minimumAte = min(...ates)

    return ate === minimumAte as Exponent<Prime>
}

const computeLateComma = (tinaCommaAnalyses: CommaAnalysis[]): Maybe<CommaAnalysis> => {
    let index = 0
    let lateComma = undefined
    while (index < count(tinaCommaAnalyses)) {
        const tinaCommaAnalysis = tinaCommaAnalyses[ index ]

        saveLog(
            `Checking comma ${index}: ${tinaCommaAnalysis.monzo}, N2D3P9 ${tinaCommaAnalysis.twoThreeFreeClassAnalysis.n2d3p9}` as Io,
            LogTarget.PROGRESS,
        )
        if (computeIsCommaLate(tinaCommaAnalysis)) {
            lateComma = tinaCommaAnalysis
            break
        }
        index = increment(index)
    }

    return lateComma
}

export {
    computeIsCommaLate,
    computeLateComma,
}
