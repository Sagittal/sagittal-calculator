import {BLANK, Comma, Filename, LogTarget, Monzo, readLines, saveLog} from "@sagittal/general"
import {computeCommasFrom23FreeRationalMonzo} from "@sagittal/system"
import {MAX_PRIME_LIMIT_OF_ANY_SEMITINA_BUCKET_BEST_COMMA} from "./constants"

const computeAllCommasLessThanHalfApotome = (): Comma[] => {
    const TWO_3_FREE_MONZOS_WITH_N2D3P9_LOWER_THAN_5298 = JSON.parse(
        readLines("src/scripts/jiPitch/input/two3FreeRationalMonzosWithN2D3P9LowerThan5298.txt" as Filename)
            .join(BLANK),
    ) as Array<Monzo<{rational: true, rough: 5}>>

    let commas: Comma[] = []
    TWO_3_FREE_MONZOS_WITH_N2D3P9_LOWER_THAN_5298
        .forEach((two3FreeRationalMonzo: Monzo<{rational: true, rough: 5}>): void => {
            commas = commas.concat(
                computeCommasFrom23FreeRationalMonzo(
                    two3FreeRationalMonzo,
                    {maxPrimeLimit: MAX_PRIME_LIMIT_OF_ANY_SEMITINA_BUCKET_BEST_COMMA},
                ),
            )
        })
    saveLog("commas gathered", LogTarget.PROGRESS)

    return commas
}

export {
    computeAllCommasLessThanHalfApotome,
}
