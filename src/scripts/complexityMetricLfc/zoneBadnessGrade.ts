import {areScamonsEqual, Comma, formatDecimal, Grade, LogTarget, saveLog} from "../../general"
import {Badness, CommaClassId, computeLpei, formatComma, getCommaClass, Notation} from "../../sagittal"
import {complexityMetricLfcScriptGroupSettings} from "./globals"

const computeZoneBadnessGrade = (
    [commaClassId, commas]: [CommaClassId, Comma[]],
): Grade<Notation> => {
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

    const zoneBadnessGrade = complexityMetricLfcScriptGroupSettings.sosMode ?
        (actualCommaBadness - leastCommaBadness) ** 2 as Grade<Notation> :
        actualCommaBadness === leastCommaBadness ?
            0 as Grade<Notation> :
            1 as Grade<Notation>

    saveLog(
        `badness grade for ${formatComma(actualComma)}'s zone: ${zoneBadnessGrade}\n`,
        LogTarget.DETAILS,
    )

    return zoneBadnessGrade
}

export {
    computeZoneBadnessGrade,
}
