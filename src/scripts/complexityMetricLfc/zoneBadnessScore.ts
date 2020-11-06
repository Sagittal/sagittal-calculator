import {
    areScamonsEqual,
    Comma,
    compute23FreeClass,
    computeCentsFromPitch,
    formatDecimal,
    LogTarget,
    saveLog,
    Score,
} from "../../general"
import {
    Badness,
    CommaClassId,
    computeAas,
    computeAte,
    computeLpei,
    computeN2D3P9,
    formatComma,
    getCommaClass,
} from "../../sagittal"
import {complexityMetricLfcScriptGroupSettings} from "./globals"

// TODO: DRY this with zoneMetricScore
const computeZoneBadnessScore = ([commaClassId, commas]: [CommaClassId, Comma[]]): Score<Badness> => {
    let lowestCommaBadness = Infinity as Badness
    let actualCommaBadness = Infinity as Badness

    const actualComma = getCommaClass(commaClassId).pitch

    commas.forEach((comma: Comma): void => {
        const n2d3p9 = computeN2D3P9(compute23FreeClass(comma))
        const aas = computeAas(comma)
        const ate = computeAte(comma)
        const cents = computeCentsFromPitch(comma)

        const badness = computeLpei(n2d3p9, aas, ate, cents)

        const isActualComma = areScamonsEqual(comma, actualComma)

        saveLog(
            `${formatComma(comma)} badness: ${formatDecimal(badness)} ${isActualComma ? "* actual comma" : ""}`,
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
