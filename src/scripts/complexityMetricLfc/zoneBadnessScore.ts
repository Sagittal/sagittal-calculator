import {areScamonsEqual, Comma, formatDecimal, LogTarget, saveLog, Score} from "../../general"
import {Badness, CommaClassId, computeLpei, formatComma, getCommaClass} from "../../sagittal"
import {complexityMetricLfcScriptGroupSettings} from "./globals"

// TODO: DRY this with zoneMetricScore
const computeZoneBadnessScore = ([commaClassId, commas]: [CommaClassId, Comma[]]): Score<Badness> => {
    let lowestCommaBadness = Infinity as Badness
    let actualCommaBadness = Infinity as Badness

    const actualComma = getCommaClass(commaClassId).pitch

    commas.forEach((comma: Comma): void => {
        const badness = computeLpei(comma)
        const isActualComma = areScamonsEqual(comma, actualComma)

        saveLog(
            `${isActualComma ? "*" : ""}${formatComma(comma)} badness: ${formatDecimal(badness)}`,
            LogTarget.DETAILS,
        )

        if (isActualComma) actualCommaBadness = badness
        if (badness < lowestCommaBadness) {
            lowestCommaBadness = badness
        }
    })

    const zoneBadnessScore = complexityMetricLfcScriptGroupSettings.sosMode ?
        (actualCommaBadness - lowestCommaBadness) ** 2 as Score<Badness> :
        actualCommaBadness === lowestCommaBadness ?
            0 as Score<Badness> :
            1 as Score<Badness>

    saveLog(`badness score for ${formatComma(actualComma)}'s zone: ${zoneBadnessScore}\n`, LogTarget.DETAILS)

    return zoneBadnessScore
}

export {
    computeZoneBadnessScore,
}
