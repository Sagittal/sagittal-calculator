import { addTexts, Count, count, formatTable, Io, Max, Ranked, Row, Table } from "../../../general"
import { N2D3P9 } from "../../../sagittal"
import { popular23FreeClassesScriptGroupSettings } from "../globals"
import { Popular23FreeClassAnalysis, Popular23FreeClassAnalysisWithBestNotatingComma } from "../types"
import { computeBestNotatingCommaHeaderRows } from "./headerRows"

const computePopular23FreeClassesWithBestNotatingCommasOutput = (
    popular23FreeClasses: Array<Ranked<Popular23FreeClassAnalysisWithBestNotatingComma>>,
    maxN2D3P9: Max<N2D3P9>,
): Io => {
    const table: Table<Popular23FreeClassAnalysis> = computeBestNotatingCommaHeaderRows()
    const headerRowCount = count(table) as Count<Row<{ of: Popular23FreeClassAnalysis, header: true }>>

    popular23FreeClasses
        .forEach((popular23FreeClass: Ranked<Popular23FreeClassAnalysisWithBestNotatingComma>): void => {
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
            ] as Row<{ of: Popular23FreeClassAnalysis, header: true }>)
        })

    const popular23FreeClassesOutput: Io = formatTable(table, { headerRowCount })

    if (popular23FreeClassesScriptGroupSettings.useKnown) {
        return popular23FreeClassesOutput
    } else {
        const popular23FreeClassesTableTitle =
            `count of results with N2D3P9 ≤ ${maxN2D3P9}: ${popular23FreeClasses.length}\n\n` as Io

        return addTexts(popular23FreeClassesTableTitle, popular23FreeClassesOutput)
    }
}

export {
    computePopular23FreeClassesWithBestNotatingCommasOutput,
}
