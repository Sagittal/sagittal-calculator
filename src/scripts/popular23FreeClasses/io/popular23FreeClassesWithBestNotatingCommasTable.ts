import { addTexts, Count, count, formatTable, Io, Max, Ranked, Row, Table } from "../../../general"
import { N2D3P9 } from "../../../sagittal"
import { Popular23FreeClass, Popular23FreeClassWithBestNotatingComma } from "../types"
import { computeBestNotatingCommaHeaderRows } from "./headerRows"

const computePopular23FreeClassesWithBestNotatingCommasTable = (
    popular23FreeClasses: Array<Ranked<Popular23FreeClassWithBestNotatingComma>>,
    maxN2D3P9: Max<N2D3P9>,
): Io => {
    const table: Table<Popular23FreeClass> = computeBestNotatingCommaHeaderRows()
    const headerRowCount = count(table) as Count<Row<Popular23FreeClass, "Header">>

    popular23FreeClasses.forEach(popular23FreeClass => {
        const {
            formatted23FreeClass,
            rank: estimatedRank,
            centsOfBestNotatingComma,
            monzoOfBestNotatingComma,
            maybeSymbolForBestNotatingComma,
        } = popular23FreeClass

        table.push([
            formatted23FreeClass,
            estimatedRank,
            centsOfBestNotatingComma,
            monzoOfBestNotatingComma,
            maybeSymbolForBestNotatingComma,
        ] as Row<Popular23FreeClass>)
    })

    const popular23FreeClassesTableTitle = `count of results with N2D3P9 <= ${maxN2D3P9}: ${popular23FreeClasses.length}\n\n` as Io

    return addTexts(popular23FreeClassesTableTitle, formatTable(table, { headerRowCount }))
}

export {
    computePopular23FreeClassesWithBestNotatingCommasTable,
}
