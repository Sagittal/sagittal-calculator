import {Comma, Index, isUndefined, LogTarget, Maybe, saveLog, stringify} from "../../../../general"
import {computeLpe, computeLpei, formatComma} from "../../../../sagittal"
import {SEMITINA_CENTS} from "../constants"
import {Semitina} from "../types"

const computeBestCommaPerSemitinaZone = (
    commasBySemitinaZoneEntries: Array<[Index<Semitina>, Comma[]]>,
): Array<[Index<Semitina>, Comma]> => {
    const INCLUDE_ERROR_IN_PHASE_1_SCORE = true // False // TODO: make a script flag, pitch it as badness v. complexity?

    const bestCommaPerSemitinaZone: Array<[Index<Semitina>, Comma]> = commasBySemitinaZoneEntries
        .map(([semitinaZone, commas]: [Index<Semitina>, Comma[]]): [Index<Semitina>, Comma] => {
            let bestComma = undefined as Maybe<Comma>
            let bestScore = Infinity
            commas.forEach((comma: Comma): void => {
                let score
                if (INCLUDE_ERROR_IN_PHASE_1_SCORE) {
                    score = computeLpei(comma, SEMITINA_CENTS)
                } else {
                    score = computeLpe(comma)
                }

                if (score < bestScore) {
                    bestScore = score
                    bestComma = comma
                }
            })

            if (isUndefined(bestComma)) throw new Error(`No best comma for semitina zone ${semitinaZone}`)

            return [semitinaZone, bestComma]
        })

    saveLog(stringify(bestCommaPerSemitinaZone, {multiline: true}), LogTarget.DETAILS)
    saveLog("best commas per semitina zone (names)", LogTarget.DETAILS)
    bestCommaPerSemitinaZone.forEach(([semitinaZone, comma]: [Index<Semitina>, Comma]): void => {
        saveLog(`${semitinaZone}: ${formatComma(comma)}`, LogTarget.DETAILS)
    })

    saveLog("best comma per semitina zone identified", LogTarget.PROGRESS)

    return bestCommaPerSemitinaZone
}

export {
    computeBestCommaPerSemitinaZone,
}
