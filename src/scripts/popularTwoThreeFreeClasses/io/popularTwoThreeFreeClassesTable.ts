import { addTexts, Count, count, formatTable, Io, Max, Ranked, Row, Table } from "../../../general"
import { N2D3P9 } from "../../../sagittal"
import { Popular23FreeClass } from "../types"
import { computePopularTwoThreeFreeClassesHeaderRows } from "./headerRows"

const computePopularTwoThreeFreeClassesTable = (
    popularTwoThreeFreeClasses: Array<Ranked<Popular23FreeClass>>,
    maxN2D3P9: Max<N2D3P9>,
): Io => {
    const table: Table<Popular23FreeClass> = computePopularTwoThreeFreeClassesHeaderRows()
    const headerRowCount = count(table) as Count<Row<Popular23FreeClass, "Header">>

    popularTwoThreeFreeClasses.forEach(popularTwoThreeFreeClass => {
        const {
            formattedN2D3P9,
            formattedTwoThreeFreeClass,
            rank: estimatedRank,
            popularityRank: actualRank,
            symbolSubsets,
            formattedExactlyNotatingJiSymbols,
            votes,
        } = popularTwoThreeFreeClass

        table.push([
            formattedTwoThreeFreeClass,
            formattedN2D3P9,
            formattedExactlyNotatingJiSymbols,
            symbolSubsets,
            estimatedRank,
            actualRank,
            votes,
        ] as Row<Popular23FreeClass>)
    })

    const popularTwoThreeFreeClassesTableTitle = `count of results with N2D3P9 <= ${maxN2D3P9}: ${popularTwoThreeFreeClasses.length}\n\n` as Io

    return addTexts(popularTwoThreeFreeClassesTableTitle, formatTable(table, { headerRowCount }))
}

export {
    computePopularTwoThreeFreeClassesTable,
}
