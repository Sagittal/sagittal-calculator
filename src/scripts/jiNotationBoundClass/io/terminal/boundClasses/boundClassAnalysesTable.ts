import {ColorMethod, Count, formatTable, Io, Row, sumTexts, Table} from "../../../../../general"
import {JI_NOTATION_BOUND_CLASSES} from "../../../../../sagittal"
import {JiNotationBoundClassAnalysis} from "../../../boundClass"
import {RANK_COLOR_METHODS} from "../rankColors"
import {JI_NOTATION_BOUND_CLASS_ANALYSES_TABLE_TITLE} from "../titles"
import {computeJiNotationBoundClassRow} from "./boundClassRow"
import {computeJiNotationBoundClassAnalysisHeaderRows} from "./headerRows"

const computeJiNotationBoundClassAnalysesOutput = (
    jiNotationBoundClassAnalyses: JiNotationBoundClassAnalysis[],
): Io => {
    const table: Table<JiNotationBoundClassAnalysis> = computeJiNotationBoundClassAnalysisHeaderRows()
    const colors: ColorMethod[] = ["white", "white", "white", "white", "white", "white"]
    const headerRowCount: Count<Row<{of: JiNotationBoundClassAnalysis, header: true}>> =
        5 as Count<Row<{of: JiNotationBoundClassAnalysis, header: true}>>

    jiNotationBoundClassAnalyses.forEach(
        (jiNotationBoundClassAnalysis: JiNotationBoundClassAnalysis, index: number): void => {
            const jiNotationBoundClass = JI_NOTATION_BOUND_CLASSES[index]
            table.push(computeJiNotationBoundClassRow(jiNotationBoundClassAnalysis, {jiNotationBoundClass}))
            colors.push(RANK_COLOR_METHODS[jiNotationBoundClassAnalysis.bestRank])
        },
    )

    return sumTexts(JI_NOTATION_BOUND_CLASS_ANALYSES_TABLE_TITLE, formatTable(table, {colors, headerRowCount}))
}

export {
    computeJiNotationBoundClassAnalysesOutput,
}
