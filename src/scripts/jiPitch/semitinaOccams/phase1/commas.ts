import {BLANK, Comma, Filename, KeyPath, LogTarget, Monzo, readLines, saveLog, sort} from "../../../../general"
import {analyzeComma, CommaAnalysis, computeCommasFrom23FreeRationalMonzo} from "../../../../sagittal"

const computeAllCommasLessThanHalfApotome = (): CommaAnalysis[] => {
    const TWO_3_FREE_MONZOS_WITH_N2D3P9_LOWER_THAN_5298 = JSON.parse(
        readLines("src/scripts/jiPitch/input/two3FreeRationalMonzosWithN2D3P9LowerThan5298.txt" as Filename)
            .join(BLANK),
    ) as Array<Monzo<{rational: true, rough: 5}>>

    let commas: Comma[] = []
    TWO_3_FREE_MONZOS_WITH_N2D3P9_LOWER_THAN_5298
        .forEach((two3FreeRationalMonzo: Monzo<{rational: true, rough: 5}>): void => {
            commas = commas.concat(
                computeCommasFrom23FreeRationalMonzo(two3FreeRationalMonzo),
            )
        })
    saveLog("commas gathered", LogTarget.PROGRESS)

    const commaAnalyses = commas.map((comma: Comma): CommaAnalysis => analyzeComma(comma))
    saveLog("commas analyzed", LogTarget.PROGRESS)

    sort(commaAnalyses, {by: "cents" as KeyPath})
    saveLog("commas sorted", LogTarget.PROGRESS)

    return commaAnalyses
}

export {
    computeAllCommasLessThanHalfApotome,
}
