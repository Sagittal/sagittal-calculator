import { addTexts, Count, count, formatTable, Io, Max, Ranked, Row, Table } from "../../../general"
import { N2D3P9 } from "../../../sagittal"
import { Popular23FreeClass, PopularTwoThreeFreeClassWithBestNotatingComma } from "../types"
import { computeBestNotatingCommaHeaderRows } from "./headerRows"

const computePopularTwoThreeFreeClassesWithBestNotatingCommasTable = (
    popularTwoThreeFreeClasses: Array<Ranked<PopularTwoThreeFreeClassWithBestNotatingComma>>,
    maxN2D3P9: Max<N2D3P9>,
): Io => {
    const table: Table<Popular23FreeClass> = computeBestNotatingCommaHeaderRows()
    const headerRowCount = count(table) as Count<Row<Popular23FreeClass, "Header">>

    popularTwoThreeFreeClasses.forEach(popularTwoThreeFreeClass => {
        const {
            formattedTwoThreeFreeClass,
            rank: estimatedRank,
            centsOfBestNotatingComma,
            monzoOfBestNotatingComma,
            maybeSymbolForBestNotatingComma,
        } = popularTwoThreeFreeClass

        table.push([
            formattedTwoThreeFreeClass,
            estimatedRank,
            centsOfBestNotatingComma,
            monzoOfBestNotatingComma,
            maybeSymbolForBestNotatingComma,
        ] as Row<Popular23FreeClass>)
    })

    const popularTwoThreeFreeClassesTableTitle = `count of results with N2D3P9 <= ${maxN2D3P9}: ${popularTwoThreeFreeClasses.length}\n\n` as Io

    return addTexts(popularTwoThreeFreeClassesTableTitle, formatTable(table, { headerRowCount }))
}

export {
    computePopularTwoThreeFreeClassesWithBestNotatingCommasTable,
}
