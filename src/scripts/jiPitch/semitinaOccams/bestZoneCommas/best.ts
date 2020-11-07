import {Index, isUndefined, LogTarget, Maybe, saveLog, stringify} from "../../../../general"
import {CommaAnalysis, computeLpe, computeLpei} from "../../../../sagittal"
import {SEMITINA} from "../constants"
import {Semitina} from "../types"

const computeBestCommaPerSemitinaZone = (
    commaAnalysesBySemitinaZoneEntries: Array<[Index<Semitina>, CommaAnalysis[]]>,
): Array<[Index<Semitina>, CommaAnalysis]> => {
    const INCLUDE_ERROR_IN_PHASE_1_SCORE = true // False // TODO: make a script flag

    const bestCommaPerSemitinaZone: Array<[Index<Semitina>, CommaAnalysis]> = commaAnalysesBySemitinaZoneEntries
        .map(([semitinaZone, commaAnalyses]: [Index<Semitina>, CommaAnalysis[]]): [Index<Semitina>, CommaAnalysis] => {
            let bestComma = undefined as Maybe<CommaAnalysis>
            let bestScore = Infinity
            commaAnalyses.forEach((commaAnalysis: CommaAnalysis): void => {
                const n2d3p9 = commaAnalysis.two3FreeClassAnalysis.n2d3p9
                const aas = commaAnalysis.aas
                const ate = commaAnalysis.ate

                // TODO: and shouldn't you just pass LPEI the comma and have it figure it out?
                //  And if so, can you stop analyzing them so soon?
                let score
                if (INCLUDE_ERROR_IN_PHASE_1_SCORE) {
                    score = computeLpei(commaAnalysis.pitch, SEMITINA)
                } else {
                    score = computeLpe(commaAnalysis.pitch)
                }

                if (score < bestScore) {
                    bestScore = score
                    bestComma = commaAnalysis
                }
            })

            if (isUndefined(bestComma)) throw new Error(`No best comma for semitina zone ${semitinaZone}`)

            return [semitinaZone, bestComma]
        })

    saveLog(stringify(bestCommaPerSemitinaZone, {multiline: true}), LogTarget.DETAILS)
    saveLog("best commas per semitina zone (names)", LogTarget.DETAILS)
    bestCommaPerSemitinaZone.forEach(([semitinaZone, commaAnalysis]: [Index<Semitina>, CommaAnalysis]): void => {
        saveLog(`${semitinaZone}: ${commaAnalysis.name}`, LogTarget.DETAILS)
    })

    saveLog("best comma per semitina zone identified", LogTarget.PROGRESS)

    return bestCommaPerSemitinaZone
}

export {
    computeBestCommaPerSemitinaZone,
}
