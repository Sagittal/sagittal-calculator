import { addTexts, Count, count, formatTable, IO, Max, Ranked, Row, Table } from "../../../general"
import { N2D3P9 } from "../../../sagittal"
import { PopularRatio } from "../types"
import { computePopularRatiosHeaderRows } from "./headerRows"

const computePopularRatiosTable = (popularRatios: Array<Ranked<PopularRatio>>, maxN2D3P9: Max<N2D3P9>): IO => {
    const table: Table<PopularRatio> = computePopularRatiosHeaderRows()
    const headerRowCount = count(table) as Count<Row<PopularRatio, "Header">>

    popularRatios.forEach(popularRatio => {
        const {
            formattedN2D3P9,
            formattedRatio,
            rank: estimatedRank,
            popularityRank: actualRank,
            symbolSubsets,
            smileys,
            votes,
        } = popularRatio

        table.push([
            formattedRatio,
            formattedN2D3P9,
            smileys,
            symbolSubsets,
            estimatedRank,
            actualRank,
            votes,
        ] as Row<PopularRatio>)
    })

    const popularRatiosTableTitle = `count of results with N2D3P9 <= ${maxN2D3P9}: ${popularRatios.length}\n` as IO

    return addTexts(popularRatiosTableTitle, formatTable(table, { headerRowCount }))
}

export {
    computePopularRatiosTable,
}
