import { addTexts, ColorMethod, Count, formatTable, Io, Row, Table } from "../../../../../general"
import { JI_NOTATION_BOUNDS } from "../../../../../sagittal"
import { JiNotationBoundAnalysis } from "../../../bound"
import { JI_NOTATION_BOUND_COLORS } from "../boundColors"
import { computeJiNotationBoundRow } from "./boundRow"
import { JI_NOTATION_BOUND_ANALYSES_TABLE_TITLE } from "./constants"
import { computeJiNotationBoundAnalysesHeaderRows } from "./headerRows"

const computeJiNotationBoundAnalysesTable = (jiNotationBoundAnalyses: JiNotationBoundAnalysis[]): Io => {
    const table: Table<JiNotationBoundAnalysis> = computeJiNotationBoundAnalysesHeaderRows()
    const colors: ColorMethod[] = ["white", "white", "white", "white", "white", "white"]
    const headerRowCount: Count<Row<{ of: JiNotationBoundAnalysis, header: true }>> =
        5 as Count<Row<{ of: JiNotationBoundAnalysis, header: true }>>

    jiNotationBoundAnalyses.forEach((jiNotationBoundAnalysis: JiNotationBoundAnalysis, index: number): void => {
        const jiNotationBound = JI_NOTATION_BOUNDS[ index ]
        table.push(computeJiNotationBoundRow(jiNotationBoundAnalysis, { jiNotationBound }))
        colors.push(JI_NOTATION_BOUND_COLORS[ jiNotationBoundAnalysis.bestRank ])
    })

    return addTexts(JI_NOTATION_BOUND_ANALYSES_TABLE_TITLE, formatTable(table, { colors, headerRowCount }))
}

export {
    computeJiNotationBoundAnalysesTable,
}
