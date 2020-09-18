import {
    abs,
    Comma,
    computeJiPitchMonzo,
    count,
    Exponent,
    increment,
    Io,
    LogTarget,
    Maybe,
    min,
    Prime,
    saveLog,
    THREE_PRIME_INDEX,
} from "../../../general"
import { CommaAnalysis, computeNotatingCommas } from "../../../sagittal"
import { jiPitchScriptGroupSettings } from "../globals"
import { INFINITE_N2D3P9 } from "./constants"

const computeIsCommaLate = (comma: Comma): boolean => {
    const monzo = computeJiPitchMonzo(comma)
    const ate = abs(monzo[ THREE_PRIME_INDEX ])

    const notatingCommas =
        computeNotatingCommas(comma, { ...jiPitchScriptGroupSettings, maxN2D3P9: INFINITE_N2D3P9 })
    const ates = notatingCommas.map((notatingComma: Comma): Exponent<Prime> => {
        return abs(computeJiPitchMonzo(notatingComma)[ 1 ])
    })

    saveLog(`ATE ${ate} vs. other exactly notating comma ATEs ${ates}` as Io, LogTarget.PROGRESS)

    const minimumAte = min(...ates)

    return ate === minimumAte as Exponent<Prime>
}

const computeLateComma = (tinaCommaAnalyses: CommaAnalysis[]): Maybe<CommaAnalysis> => {
    let index = 0
    let lateComma = undefined
    while (index < count(tinaCommaAnalyses)) {
        const comma = tinaCommaAnalyses[ index ]

        saveLog(`Checking comma ${index}: ${comma.monzo}, N2D3P9 ${comma.n2d3p9}` as Io, LogTarget.PROGRESS)
        if (computeIsCommaLate(comma)) {
            lateComma = comma
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
