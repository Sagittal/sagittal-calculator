import { addTexts, Count, count, formatTable, Io, Max, Ranked, Row, Table } from "../../../general"
import { N2D3P9 } from "../../../sagittal"
import { PopularRatio, PopularRatioWithBestNotatingComma } from "../types"
import { computePopularRatiosHeaderRows } from "./headerRows"

const computePopularRatiosWithBestNotatingCommasTable = (
    popularRatios: Array<Ranked<PopularRatioWithBestNotatingComma>>,
    maxN2D3P9: Max<N2D3P9>
): Io => {
    const table: Table<PopularRatio> = computePopularRatiosHeaderRows()
    const headerRowCount = count(table) as Count<Row<PopularRatio, "Header">>

    popularRatios.forEach(popularRatio => {
        const {
            formattedRatio,
            rank: estimatedRank,
            centsOfNotatingCommaWithLeastAbsoluteApotomeSlope,
            monzoOfNotatingCommaWithLeastAbsoluteApotomeSlope,
            maybeSymbolForNotatingCommaWithLeastAbsoluteApotomeSlope,
        } = popularRatio

        table.push([
            formattedRatio,
            estimatedRank,
            centsOfNotatingCommaWithLeastAbsoluteApotomeSlope,
            monzoOfNotatingCommaWithLeastAbsoluteApotomeSlope,
            maybeSymbolForNotatingCommaWithLeastAbsoluteApotomeSlope,
        ] as Row<PopularRatio>)
    })

    const popularRatiosTableTitle = `count of results with N2D3P9 <= ${maxN2D3P9}: ${popularRatios.length}\n\n` as Io

    return addTexts(popularRatiosTableTitle, formatTable(table, { headerRowCount }))
}

export {
    computePopularRatiosWithBestNotatingCommasTable,
}