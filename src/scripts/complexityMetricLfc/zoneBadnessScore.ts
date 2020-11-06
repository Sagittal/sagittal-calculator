import {
    areScamonsEqual,
    Comma,
    compute23FreeClass,
    computeCentsFromPitch,
    LogTarget,
    saveLog,
    Score,
} from "../../general"
import {
    Badness,
    CommaClassId,
    computeAas,
    computeAte,
    computeN2D3P9,
    formatComma,
    getCommaClass,
    computeLpei,
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

        saveLog(`for comma ${formatComma(comma)}${isActualComma ? " (which is the actual comma) " : " "}badness score is ${badness}`, LogTarget.DETAILS)

        if (isActualComma) actualCommaBadness = badness
        if (badness < lowestCommaBadness) {
            lowestCommaBadness = badness
        }
    })

    return complexityMetricLfcScriptGroupSettings.sosMode ?
        (actualCommaBadness - lowestCommaBadness) ** 2 as Score<Badness> :
        actualCommaBadness === lowestCommaBadness ?
            0 as Score<Badness> :
            1 as Score<Badness>
}

export {
    computeZoneBadnessScore,
}
