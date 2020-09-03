import {
    abs,
    combineMonzos,
    computeRatioFromMonzo,
    computeRoughNumberMonzo,
    computeSuperMonzo,
    FIVE_ROUGHNESS,
    formatNumber,
    formatRatio,
    formatTable,
    Formatted,
    Integer,
    invertMonzo,
    Io,
    LogTarget,
    parseMonzo,
    Ranked,
    Ratio,
    round,
    Row,
    saveLog,
    sort,
    stringify,
    Table,
} from "../../../general"
import { Tina, TINA } from "../../../sagittal"
import { POPULAR_RATIOS_SCRIPT_GROUP } from "../constants"
import { PopularRatioWithBestNotatingComma } from "../types"
import { METACOMMA_HEADER_ROW } from "./constants"
import { MetacommaResult } from "./types"

const computeMetacommasTable = (
    popularRatiosWithBestNotatingCommas: Array<Ranked<PopularRatioWithBestNotatingComma>>,
): Io => {
    const popularRatiosNotExactlyNotated: Array<Formatted<Ratio>> = []
    popularRatiosWithBestNotatingCommas.forEach(popularRatio => {
        if (popularRatio.symbolSubsets.length === 0) {
            popularRatiosNotExactlyNotated.push(popularRatio.formattedRatio)
        }
    })

    saveLog(
        stringify(popularRatiosNotExactlyNotated, { multiline: true }) as Io,
        LogTarget.ALL,
        POPULAR_RATIOS_SCRIPT_GROUP,
    )

    const metacommaResults = {} as Record<string, MetacommaResult>
    popularRatiosWithBestNotatingCommas.forEach(popularRatioA => {
        popularRatiosWithBestNotatingCommas.forEach(popularRatioB => {
            const centsDifference = abs(
                parseFloat(popularRatioA.centsOfNotatingCommaWithLeastAbsoluteApotomeSlope) -
                parseFloat(popularRatioB.centsOfNotatingCommaWithLeastAbsoluteApotomeSlope),
            )

            // TODO: it is horrible that these are already formatted
            //  and also you need to standardize what order and place things go from formatted to rows to etc.
            //  amongst the scripts

            if (centsDifference !== 0 && centsDifference < 9.5 * TINA) {
                const monzoA = parseMonzo(popularRatioA.monzoOfNotatingCommaWithLeastAbsoluteApotomeSlope)
                const monzoB = parseMonzo(popularRatioB.monzoOfNotatingCommaWithLeastAbsoluteApotomeSlope)

                const monzoDifference = computeSuperMonzo(combineMonzos(monzoA, invertMonzo(monzoB)))

                const ratioA = formatRatio(
                    computeRatioFromMonzo(computeSuperMonzo(computeRoughNumberMonzo(monzoA, FIVE_ROUGHNESS))),
                )
                const ratioB = formatRatio(
                    computeRatioFromMonzo(computeSuperMonzo(computeRoughNumberMonzo(monzoB, FIVE_ROUGHNESS))),
                )

                const isRatioANotExactlyNotated = popularRatiosNotExactlyNotated.includes(ratioA)
                const isRatioBNotExactlyNotated = popularRatiosNotExactlyNotated.includes(ratioB)

                const isThisComboOfRatiosOneWhereTheMetacommaEnablesNotationOfPreviouslyNotExactlyNotatedRatio =
                    (isRatioANotExactlyNotated || isRatioBNotExactlyNotated) &&
                    !(isRatioANotExactlyNotated && isRatioBNotExactlyNotated)

                if (!isThisComboOfRatiosOneWhereTheMetacommaEnablesNotationOfPreviouslyNotExactlyNotatedRatio) return

                let theRatioWhichWouldBeNewlyExactlyNotatable
                let theRatioWhichIsAlreadyExactlyNotated
                if (isRatioANotExactlyNotated) {
                    theRatioWhichWouldBeNewlyExactlyNotatable = ratioA
                    theRatioWhichIsAlreadyExactlyNotated = ratioB
                } else {
                    theRatioWhichWouldBeNewlyExactlyNotatable = ratioB
                    theRatioWhichIsAlreadyExactlyNotated = ratioA
                }

                const metacomma: Formatted<Ratio> = formatRatio(computeRatioFromMonzo(monzoDifference))
                const tinas = round(centsDifference / TINA, 3 as Integer) as Tina

                metacommaResults[ metacomma ] = metacommaResults[ metacomma ] || {}
                metacommaResults[ metacomma ].newExactNotation = metacommaResults[ metacomma ].newExactNotation || {}

                metacommaResults[ metacomma ].tinas = tinas
                metacommaResults[ metacomma ].newExactNotation[ theRatioWhichWouldBeNewlyExactlyNotatable ] =
                    theRatioWhichIsAlreadyExactlyNotated
            }
        })
    })


    const metacommaResultsSortedByTinaSize = sort(Object.entries(metacommaResults), { by: [1, "tinas"] })

    saveLog(
        stringify(metacommaResultsSortedByTinaSize, { multiline: true }) as Io,
        LogTarget.ALL,
        POPULAR_RATIOS_SCRIPT_GROUP,
    )

    const metacommaTable: Table = metacommaResultsSortedByTinaSize.map(([metacomma, result]) => {
        const metacommaRow = [...Array(METACOMMA_HEADER_ROW.length).keys()].map(_ => "")

        metacommaRow[ 0 ] = metacomma
        metacommaRow[ 1 ] = formatNumber(result.tinas)

        Object.entries(result.newExactNotation).forEach(([newlyExactlyNotatedRatio, alreadyExactlyNotatedRatio]) => {
            const newlyExactlyNotatedRatioColumnIndex =
                popularRatiosNotExactlyNotated.findIndex(popularRatioNotExactlyNotated => {
                    return popularRatioNotExactlyNotated === newlyExactlyNotatedRatio
                }) + 2 // the 2 is because of the first two columns above, for the metacomma and its tinas
            metacommaRow[ newlyExactlyNotatedRatioColumnIndex ] = alreadyExactlyNotatedRatio
        })

        return metacommaRow as Row
    })

    metacommaTable.unshift(METACOMMA_HEADER_ROW)

    return formatTable(metacommaTable)
}

export {
    computeMetacommasTable,
}
