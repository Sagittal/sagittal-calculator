import {areScamonsEqual, Comma, formatDecimal, LogTarget, saveLog, Score} from "../../general"
import {Badness, CommaClassId, computeLpei, formatComma, getCommaClass, Notation} from "../../sagittal"
import {complexityMetricLfcScriptGroupSettings} from "./globals"

const computeZoneBadnessScore = (
    [commaClassId, commas]: [CommaClassId, Comma[]],
): Score<Notation> => {
    let leastCommaBadness = Infinity as Badness
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
        if (badness < leastCommaBadness) {
            leastCommaBadness = badness
        }
    })

    const zoneBadnessScore = complexityMetricLfcScriptGroupSettings.sosMode ?
        (actualCommaBadness - leastCommaBadness) ** 2 as Score<Notation> :
        actualCommaBadness === leastCommaBadness ?
            0 as Score<Notation> :
            1 as Score<Notation>

    saveLog(
        `badness score for ${formatComma(actualComma)}'s zone: ${zoneBadnessScore}\n`,
        LogTarget.DETAILS,
    )

    return zoneBadnessScore
}

export {
    computeZoneBadnessScore,
}
