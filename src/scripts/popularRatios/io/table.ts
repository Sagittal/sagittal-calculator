import {
    addTexts,
    computeHeaderRowsFromColumnTitleColumns, count,
    formatTableForForum,
    IO,
    Max,
    Ranked,
    Row,
    Table,
} from "../../../general"
import { N2D3P9 } from "../../../sagittal"
import { PopularRatio } from "../types"
import { POPULAR_RATIOS_COLUMN_TITLE_COLUMNS } from "./headerRows"

const computePopularRatiosTable = (popularRatios: Array<Ranked<PopularRatio>>, maxN2D3P9: Max<N2D3P9>): IO => {
    const table: Table = computeHeaderRowsFromColumnTitleColumns(POPULAR_RATIOS_COLUMN_TITLE_COLUMNS)
    const headerRowCount = count(table)

    popularRatios.forEach(popularRatio => {
        const {
            formattedN2D3P9,
            formattedRatio,
            rank: estimatedRank,
            popularityRank: actualRank,
            symbolSets,
            smileys,
            votes,
        } = popularRatio

        table.push([formattedRatio, formattedN2D3P9, smileys, symbolSets, estimatedRank, actualRank, votes] as Row)
    })

    const popularRatiosTableTitle = `count of results with N2D3P9 <= ${maxN2D3P9}: ${popularRatios.length}\n` as IO

    return addTexts(popularRatiosTableTitle, formatTableForForum(table, { headerRowCount }))
}

export {
    computePopularRatiosTable,
}
