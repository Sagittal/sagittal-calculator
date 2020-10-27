import {areScamonsEqual, Comma, compute23FreeClass, isUndefined, Maybe} from "../../general"
import {CommaClassId, computeAas, computeAte, computeN2D3P9, getCommaClass} from "../../sagittal"
import {UsefulnessMetric, UsefulnessParameterSet} from "./types"

const isCommaMostUsefulInZone = (
    [commaClassId, commas]: [CommaClassId, Comma[]],
    usefulnessMetric: UsefulnessMetric,
    usefulnessParameterSet: UsefulnessParameterSet,
): boolean => {
    let mostUsefulness = Infinity
    let mostUsefulComma: Maybe<Comma> = undefined
    commas.forEach((comma: Comma): void => {
        const n2d3p9 = computeN2D3P9(compute23FreeClass(comma))
        const aas = computeAas(comma)
        const ate = computeAte(comma)

        const usefulness = usefulnessMetric(
            n2d3p9,
            aas,
            ate,
            usefulnessParameterSet,
        )
        if (usefulness < mostUsefulness) {
            mostUsefulness = usefulness
            mostUsefulComma = comma
        }
    })

    if (isUndefined(mostUsefulComma)) {
        throw new Error(`Found no most useful comma for comma class ${commaClassId}.`)
    }

    const commaClass = getCommaClass(commaClassId)

    return areScamonsEqual(mostUsefulComma, commaClass.pitch)
}

export {
    isCommaMostUsefulInZone,
}
