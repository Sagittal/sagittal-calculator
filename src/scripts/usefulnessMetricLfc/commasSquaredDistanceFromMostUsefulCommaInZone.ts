import {areScamonsEqual, Comma, compute23FreeClass, LogTarget, saveLog} from "../../general"
import {CommaClassId, computeAas, computeAte, computeN2D3P9, formatComma, getCommaClass} from "../../sagittal"
import {SquaredDistanceOfUsefulness, UsefulnessMetric, UsefulnessParameterSet} from "./types"

const computeCommasSquaredDistanceFromMostUsefulCommaInZone = (
    [commaClassId, commas]: [CommaClassId, Comma[]],
    usefulnessMetric: UsefulnessMetric,
    usefulnessParameterSet: UsefulnessParameterSet,
): SquaredDistanceOfUsefulness => {
    let mostUsefulness = Infinity
    let actualCommaUsefulness = Infinity

    const actualComma = getCommaClass(commaClassId).pitch

    commas.forEach((comma: Comma): void => {
        const n2d3p9 = computeN2D3P9(compute23FreeClass(comma))
        const aas = computeAas(comma)
        const ate = computeAte(comma)

        const usefulness = usefulnessMetric(n2d3p9, aas, ate, usefulnessParameterSet)

        const isActualComma = areScamonsEqual(comma, actualComma)

        saveLog(`for comma ${formatComma(comma)}${isActualComma ? " (which is the actual comma) " : " "}usefulness is ${usefulness}`, LogTarget.DETAILS)

        if (isActualComma) actualCommaUsefulness = usefulness
        if (usefulness < mostUsefulness) mostUsefulness = usefulness
    })

    return (actualCommaUsefulness - mostUsefulness) ** 2 as SquaredDistanceOfUsefulness
}

export {
    computeCommasSquaredDistanceFromMostUsefulCommaInZone,
}
