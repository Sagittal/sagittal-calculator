import {Count, count, formatTable, Io, Max, Ranked, Row, sumTexts, Table} from "@sagittal/general"
import {N2D3P9} from "@sagittal/system"
import {
    BestNotatingCommaProperties,
    computePopular23FreeClassWithBestNotatingCommaHeaderRows,
    computePopular23FreeClassWithBestNotatingCommaRow,
} from "../bestNotatingComma"
import {popular23FreeClassesScriptGroupSettings} from "../globals"
import {
    computePopular23FreeClassWithNotatingSymbolClassesHeaderRows,
    computePopular23FreeClassWithNotatingSymbolClassesRow,
    NotatingSymbolClassesProperties,
} from "../notatingSymbolClasses"
import {Popular23FreeClass} from "../types"

const computePopular23FreeClassesOutput = (
    popular23FreeClasses: Array<Ranked<Popular23FreeClass>>,
    maxN2D3P9: Max<N2D3P9>,
): Io => {
    const headerRows: Table<Popular23FreeClass> = popular23FreeClassesScriptGroupSettings.useBestNotatingCommas ?
        computePopular23FreeClassWithBestNotatingCommaHeaderRows() :
        computePopular23FreeClassWithNotatingSymbolClassesHeaderRows()
    const headerRowCount = count(headerRows) as Count<Row<{of: Popular23FreeClass, header: true}>>

    const rows = popular23FreeClasses
        .map((popular23FreeClass: Ranked<Popular23FreeClass>): Row<{of: Popular23FreeClass}> => {
            if (popular23FreeClassesScriptGroupSettings.useBestNotatingCommas) {
                return computePopular23FreeClassWithBestNotatingCommaRow(
                    popular23FreeClass as Ranked<Popular23FreeClass & BestNotatingCommaProperties>,
                )
            } else {
                return computePopular23FreeClassWithNotatingSymbolClassesRow(
                    popular23FreeClass as Ranked<Popular23FreeClass & NotatingSymbolClassesProperties>,
                )
            }
        })

    const table = [...headerRows, ...rows]

    const popular23FreeClassesOutput: Io = formatTable(table, {headerRowCount})

    if (popular23FreeClassesScriptGroupSettings.useKnown) {
        return popular23FreeClassesOutput
    } else {
        const popular23FreeClassesTableTitle =
            `count of results with N2D3P9 ≤ ${maxN2D3P9}: ${popular23FreeClasses.length}\n\n` as Io

        return sumTexts(popular23FreeClassesTableTitle, popular23FreeClassesOutput)
    }
}

export {
    computePopular23FreeClassesOutput,
}
