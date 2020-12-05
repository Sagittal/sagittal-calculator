import {Comma, Index, isUndefined, LogTarget, Maybe, saveLog, stringify} from "@sagittal/general"
import {computeLpe, computeLpei, formatComma} from "@sagittal/system"
import {SEMITINA_CENTS} from "../constants"
import {Semitina} from "../types"
import {computeAllCommasLessThanHalfApotome} from "./commas"
import {computeCommasBySemitinaZone} from "./zone"
import {computeCommasBySemitinaZoneEntries} from "./zoneEntries"

const computeBestCommaPerSemitinaZone = (complexityOnly: boolean): Array<[Index<Semitina>, Comma]> => {
    const commas = computeAllCommasLessThanHalfApotome()
    const commasBySemitinaZone = computeCommasBySemitinaZone(commas)
    const commasBySemitinaZoneEntries = computeCommasBySemitinaZoneEntries(commasBySemitinaZone)

    const bestCommaPerSemitinaZone: Array<[Index<Semitina>, Comma]> = commasBySemitinaZoneEntries
        .map(([semitinaZone, commas]: [Index<Semitina>, Comma[]]): [Index<Semitina>, Comma] => {
            let bestComma = undefined as Maybe<Comma>
            let bestGrade = Infinity
            commas.forEach((comma: Comma): void => {
                const grade = complexityOnly ? computeLpe(comma) : computeLpei(comma, SEMITINA_CENTS)

                if (grade < bestGrade) {
                    bestGrade = grade
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
