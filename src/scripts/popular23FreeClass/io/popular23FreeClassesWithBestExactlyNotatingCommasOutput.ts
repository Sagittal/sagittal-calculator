import { addTexts, Count, count, formatTable, Io, Max, Ranked, Row, Table } from "../../../general"
import { N2D3P9 } from "../../../sagittal"
import { popular23FreeClassesScriptGroupSettings } from "../globals"
import { Popular23FreeClassAnalysis, Popular23FreeClassAnalysisWithBestExactlyNotatingComma } from "../types"
import { computeBestExactlyNotatingCommaHeaderRows } from "./headerRows"

const computePopular23FreeClassesWithBestExactlyNotatingCommasOutput = (
    popular23FreeClasses: Array<Ranked<Popular23FreeClassAnalysisWithBestExactlyNotatingComma>>,
    maxN2D3P9: Max<N2D3P9>,
): Io => {
    const table: Table<Popular23FreeClassAnalysis> = computeBestExactlyNotatingCommaHeaderRows()
    const headerRowCount = count(table) as Count<Row<{ of: Popular23FreeClassAnalysis, header: true }>>

    popular23FreeClasses
        .forEach((popular23FreeClass: Ranked<Popular23FreeClassAnalysisWithBestExactlyNotatingComma>): void => {
            const {
                formatted23FreeClass,
                rank: estimatedRank,
                centsOfBestExactlyNotatingComma,
                monzoOfBestExactlyNotatingComma,
                maybeSymbolForBestExactlyNotatingComma,
            } = popular23FreeClass

            table.push([
                formatted23FreeClass,
                estimatedRank,
                centsOfBestExactlyNotatingComma,
                monzoOfBestExactlyNotatingComma,
                maybeSymbolForBestExactlyNotatingComma,
            ] as Row<{ of: Popular23FreeClassAnalysis, header: true }>)
        })

    const popular23FreeClassesOutput: Io = formatTable(table, { headerRowCount })

    if (popular23FreeClassesScriptGroupSettings.useKnown) {
        return popular23FreeClassesOutput
    } else {
        const popular23FreeClassesTableTitle =
            `count of results with N2D3P9 <= ${maxN2D3P9}: ${popular23FreeClasses.length}\n\n` as Io

        return addTexts(popular23FreeClassesTableTitle, popular23FreeClassesOutput)
    }
}

export {
    computePopular23FreeClassesWithBestExactlyNotatingCommasOutput,
}
