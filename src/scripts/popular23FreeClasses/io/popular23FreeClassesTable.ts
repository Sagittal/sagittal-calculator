import { addTexts, Count, count, formatTable, Io, Max, Ranked, Row, Table } from "../../../general"
import { N2D3P9 } from "../../../sagittal"
import { Popular23FreeClass } from "../types"
import { computePopular23FreeClassesHeaderRows } from "./headerRows"

const computePopular23FreeClassesTable = (
    popular23FreeClasses: Array<Ranked<Popular23FreeClass>>,
    maxN2D3P9: Max<N2D3P9>,
): Io => {
    const table: Table<Popular23FreeClass> = computePopular23FreeClassesHeaderRows()
    const headerRowCount = count(table) as Count<Row<Popular23FreeClass, "Header">>

    popular23FreeClasses.forEach(popular23FreeClass => {
        const {
            formattedN2D3P9,
            formatted23FreeClass,
            rank: estimatedRank,
            popularityRank: actualRank,
            symbolSubsets,
            formattedExactlyNotatingJiSymbols,
            votes,
        } = popular23FreeClass

        table.push([
            formatted23FreeClass,
            formattedN2D3P9,
            formattedExactlyNotatingJiSymbols,
            symbolSubsets,
            estimatedRank,
            actualRank,
            votes,
        ] as Row<Popular23FreeClass>)
    })

    const popular23FreeClassesTableTitle = `count of results with N2D3P9 <= ${maxN2D3P9}: ${popular23FreeClasses.length}\n\n` as Io

    return addTexts(popular23FreeClassesTableTitle, formatTable(table, { headerRowCount }))
}

export {
    computePopular23FreeClassesTable,
}
