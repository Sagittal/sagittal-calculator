import { Comma, ObjectKey, sort } from "../../../general"
import { analyzeComma, CommaAnalysis } from "../../../sagittal"
import { MAX_TINA_SIZES } from "./constants"

const computeCommaAnalysesSortedByTinaEntries = (commas: Comma[]): Array<[string, CommaAnalysis[]]> => {
    const commaAnalyses = commas.map((comma: Comma): CommaAnalysis => analyzeComma(comma))
    sort(commaAnalyses, { by: "cents" })

    const commaAnalysesByTina: Record<number, CommaAnalysis[]> = {
        [ 0.5 ]: [],
        [ 1 ]: [],
        [ 1.5 ]: [],
        [ 2 ]: [],
        [ 2.5 ]: [],
        [ 3 ]: [],
        [ 3.5 ]: [],
        [ 4 ]: [],
        [ 4.5 ]: [],
        [ 5 ]: [],
        [ 5.5 ]: [],
        [ 6 ]: [],
        [ 6.5 ]: [],
        [ 7 ]: [],
        [ 7.5 ]: [],
        [ 8 ]: [],
        [ 8.5 ]: [],
        [ 9 ]: [],
        [ 9.5 ]: [],
    }

    let currentTina = 0.5
    commaAnalyses.forEach((commaAnalysis: CommaAnalysis): void => {
        while (commaAnalysis.cents > MAX_TINA_SIZES[ currentTina * 2 - 1 ]) {
            currentTina = currentTina + 0.5
        }
        commaAnalysesByTina[ currentTina ].push(commaAnalysis)
    })

    Object.values(commaAnalysesByTina).forEach((tinaCommaAnalyses: CommaAnalysis[]): void => {
        sort(tinaCommaAnalyses, { by: "n2d3p9" as ObjectKey })
    })

    return sort(Object.entries(commaAnalysesByTina), { by: 0 })
}

export {
    computeCommaAnalysesSortedByTinaEntries,
}
